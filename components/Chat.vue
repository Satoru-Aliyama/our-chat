<template>
    <div class="chat container">
        <h2 class="center">Chat</h2>
        <div class="card">
            <div class="card-content">
                <ul class="messages" v-chat-scroll>
                    
                    <li v-for="message in messages" :key="message.id">
                        <span class="teal-text" style="display: block;">{{ message.name }}</span>
                        <span class="teal lighten-5" style="display: inline-block; font-size: 1em; padding: 5px; border-radius: 10px"> {{ message.content }}</span>
                        <span class="grey-text time">{{ message.timestamp }}</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <NewMessage :name="name"></NewMessage>
            </div>
        </div>
        
    </div>
</template>
    
<script>
import NewMessage from './NewMessage';
import db from '@/firebase/init.js';
import moment from 'moment'
export default {
    props:['name'],
    name: 'Chat',
    data() {
        return {
            messages: []
        }
    },
    components: {
        NewMessage,
    },
    created() {
        let ref = db.collection('messages').orderBy('timestamp');

        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added') {
                    let doc = change.doc;
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().timestamp).format('lll'),
                    })
                }
            })
        })
    }
}
</script>

<style lang="scss" scoped>
    .chat {
        position: absolute;
            top: 35%;
            left: 50%;
            transform: translate(-50%, -35%);
            max-width: 700px;
        & h2 {
            font-size: 2.6em;
            margin-bottom: 20px;
            color: #fff;
        }
        & span {
            font-size: 1.4em;
        }
        & .time {
            display: block;
            font-size: 0.75em;
        }
        & .messages {
            max-height: 300px;
            padding-right: 5px;
            overflow: auto;
            &::-webkit-scrollbar {
                width: 3px;
                &-track {
                    background: #ddd;
                }
                &-thumb {
                    background: #aaa;
                }
            }
        }
        
    }
</style>
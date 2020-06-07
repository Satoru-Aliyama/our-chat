<template>
 <div class="new-message">
     <form >
         <label for="new-message">New Message</label>
         <input type="text" name="new-message" v-model="newMessage">
         <p v-if="feedback" class="red-text">{{feedback}}</p>
         <button class="material-icons add btn-small btn-floating" @click.prevent="addMessage">add</button>
     </form>
 </div>
</template>

<script>
import db from '@/firebase/init.js';
export default {
    name: 'newMessage', 
    props:['name'],
    data() {
        return {
            newMessage: null,
            feedback: null,
        }
    },
    methods: {
        addMessage() {
            if(this.newMessage) {
                db.collection('messages').add({
                    content: this.newMessage,
                    name: this.name,
                    timestamp: Date.now()
                }).catch(err => {
                    console.log(err);
                })
                this.newMessage = null;
                this.feedback = null;
            } else {
                this.feedback = "You must enter a message in order to send one. "
            }
            
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .new-message {
        position: relative;
        & button {
            position: absolute;
            right: 0;
            font-size: 1.4em;
            bottom: 16px;
            
            cursor: pointer;
            &:hover {
                color: red;
            }
        }
    }
</style>
    

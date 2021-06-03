<template>
  <div class="input-container" >
      <label :for="id">
          <span>
              {{label}}
          </span>
      </label>
      <input class="message-input" 
                :ref="id" 
                @focus="focusWarning = true; isFocus=true" 
                @input="(e)=>{$emit('input',e.target.value); e.target.value ? buttonShow = true : buttonShow=false}"
                v-click-outside="()=>{focusWarning = false}" 
                :disabled="disabled" 
                :name="name" 
                :id="id" 
                :type="type" 
                :placeholder="placeholder"
                :value="value"  >

                <span v-if="buttonShow" @click="(e)=>{$emit('click')}" class="message-submit">Gönder</span>
                {{value}}
  </div>
</template>

<script>
export default {
    props:{
        type:{
            type:String,
            default:"text"
        },
        label:{
            type:String,
            default:""
        },
        name:{
            type:String,
            default:""
        },
        placeholder:{
            type:String,
            default:""
        },
        disabled:{
            type:Boolean,
            default:false
        },
        value:{},
        required:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{
            id:this.$helper.makeId(10),
            focusWarning:false,
            isFocus:false,
            buttonShow:false
        }
    },
    computed:{
        requiredColor(){
            return !this.value && this.isFocus ? 'var(--pg-danger-color)' : this.focusWarning ? 'var(--pg-warning-color)' : 'rgb(32, 197, 128)'
        },
        validation(){
            return this.required && this.validate ? 'required|'+this.validate : this.required  ? 'required' : this.validate
        },
        errorHandle(){
            return (!this.value || this.errors.has(this.name))
        }
    },
    mounted(){
           setTimeout(() => {
               if(!this.value){
                   this.$refs[this.id] && this.$refs[this.id].focus()
               }
           }, 1500);
    }
}
</script>

<style lang="scss" scoped>
    @import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900&display=swap");
    .input-container{
        display: inline-block;
        outline: none;
        width: 100%;
        position: relative;
        text-transform: none;
        text-decoration: none;
        label{
            font-size: .85rem;
            color: rgba(0,0,0,.7);
            padding-left: .7rem;
        }
    }
    .message-input{
        border-radius: 5px;
        display: block;
        height: 40px;
        font-size: .9rem;
        font-family: 'Poppins','Sans Serif';
        box-sizing: border-box;
        color: rgba(0,0,0,0.7);
        border: 1px solid #ddd;
        transition: all .3s ease;
        background-color: #fff;
        padding-left: .7rem;
        width: 100%;
        &:focus{
            border: 1px solid rgb(32, 197, 128);
            outline: none;
            box-shadow: 0 1px 3px rgba(255,255,255,0.2);
        }
    }

    .message-submit{
        position: absolute;
        right: 5%;
        top: 50%;
        font-family: 'Poppins','Sans Serif';
        color: rgb(15, 228, 139);
        font-weight: 600;
    }
</style>
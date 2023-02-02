/* eslint-disable no-unused-vars */
<template>
  <div class="p-relative w-full" ref="commentInput">
    <form
      class="
        control-container
        p-relative
        flex
        items-center
        justify-between
        rounded-pill
        w-full
        px-3 px-md-6
        py-2
      "
      @submit.prevent="submitComment"
    >
      <div
        contenteditable="true"
        spellcheck="true"
        role="textbox"
        aria-label="Add comment"
        data-placeholder="Add a comment"
        aria-multiline="true"
        @input="inInput"
        @focus="getCursor"
        ref="comment"
        class="comment px-2"
      ></div>

      <div class="flex gap-0 media-control-container p-relative">
        <button
          class="
            flex
            justify-center
            items-center
            form-btn
            control-btn
            ml-2
            px-0
          "
          type="button"
          @click="showEmoji = !showEmoji"
        >
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.199951 10C0.199951 4.4878 4.68776 0 10.2 0C15.7121 0 20.2 4.4878 20.2 10C20.2 15.5122 15.7121 20 10.2 20C4.68776 20 0.199951 15.5122 0.199951 10ZM1.41946 10C1.41946 14.8293 5.34629 18.7805 10.2 18.7805C15.0536 18.7805 18.9804 14.8537 18.9804 10C18.9804 5.17073 15.0292 1.21951 10.2 1.21951C5.37068 1.21951 1.41946 5.14634 1.41946 10Z"
                fill="black"
              />
              <path
                d="M6.39504 8.46343C6.93386 8.46343 7.37065 8.02663 7.37065 7.48782C7.37065 6.949 6.93386 6.51221 6.39504 6.51221C5.85623 6.51221 5.41943 6.949 5.41943 7.48782C5.41943 8.02663 5.85623 8.46343 6.39504 8.46343Z"
                fill="black"
              />
              <path
                d="M14.0049 8.46343C14.5437 8.46343 14.9805 8.02663 14.9805 7.48782C14.9805 6.949 14.5437 6.51221 14.0049 6.51221C13.4661 6.51221 13.0293 6.949 13.0293 7.48782C13.0293 8.02663 13.4661 8.46343 14.0049 8.46343Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.9561 10.7319H5.44392C5.12684 10.7319 4.80977 10.8783 4.61465 11.1466C4.41953 11.4149 4.37075 11.7319 4.44392 12.049C5.20001 14.5856 7.56587 16.3417 10.2 16.3417C12.8342 16.3417 15.2 14.5856 15.9317 12.049C16.0293 11.7319 15.9561 11.4149 15.761 11.1466C15.5659 10.9027 15.2732 10.7319 14.9561 10.7319ZM8.49268 14.8051C8.95609 14.3905 9.56585 14.1466 10.2 14.1466C10.8341 14.1466 11.4439 14.3905 11.9073 14.7807C11.3707 14.9758 10.8097 15.0978 10.2 15.0978C9.61463 15.1222 9.02926 15.0002 8.49268 14.8051ZM10.2 12.9271C11.2732 12.9271 12.2976 13.3905 13.0049 14.1953C13.761 13.6344 14.3464 12.8783 14.6878 11.9758H5.7366C6.05368 12.8783 6.63904 13.6344 7.39514 14.1953C8.10246 13.3905 9.10246 12.9271 10.2 12.9271Z"
               fill="black"
              />
            </g>
          </svg>
        </button>
      </div>
    </form>
    <div class="p-absolute emoji-container" v-show="showEmoji">
      <div class="block">
        <VEmojiPicker @select="selectEmoji" />
      </div>
    </div>
    <div
      class="p-fixed emoji-backdrop"
      v-show="showEmoji"
      @click="showEmoji = false"
    ></div>
    <button
      class="form-btn comment-btn bg-blue text-white mt-2"
      ref="commentBtn"
      @click="submitComment"
      v-show="comment !== ''"
    >
      post
    </button>
  </div>
</template>
  
  <script>
import { VEmojiPicker } from "v-emoji-picker";
export default {
  components: {
    VEmojiPicker,
  },
  props: ["successful" , "id"],
  data() {
    return {
      isChecked: false,
      comment: "",
      showEmoji: false,
      sel: null,
      range: null,
    };
  },
  watch: { 
    // eslint-disable-next-line no-unused-vars
    successful(newVal, oldVal) {
      this.comment = "";
      this.$refs.comment.innerHTML = "";
      this.$refs.comment.textContent = this.comment;
      this.$refs.commentInput.classList.remove("opacity");
      this.$refs.commentBtn.disabled = false;
      this.$refs.commentBtn.style.cursor = "pointer";
      this.$emit("reset");
    },
  },
  methods: {
    getCaretCharacterOffsetWithin(element) {
      var caretOffset = 0;
      var doc = element.ownerDocument || element.document;
      var win = doc.defaultView || doc.parentWindow;
      var sel;
      if (typeof win.getSelection != "undefined") {
        sel = win.getSelection();
        this.sel = win.getSelection();
        if (sel.rangeCount > 0) {
          var range = win.getSelection().getRangeAt(0);
          this.range = win.getSelection().getRangeAt(0);
          var preCaretRange = range.cloneRange();
          preCaretRange.selectNodeContents(element);
          preCaretRange.setEnd(range.endContainer, range.endOffset);
          caretOffset = preCaretRange.toString().length;
        }
      } else if ((sel = doc.selection) && sel.type != "Control") {
        var textRange = sel.createRange();
        var preCaretTextRange = doc.body.createTextRange();
        preCaretTextRange.moveToElementText(element);
        preCaretTextRange.setEndPoint("EndToEnd", textRange);
        // eslint-disable-next-line no-unused-vars
        caretOffset = preCaretTextRange.text.length;
      }
    },
    submitComment() {
      this.showEmoji = false;
      this.$emit("newComment", this.$refs.comment.innerHTML , this.id);
      this.$refs.commentInput.classList.add("opacity");
      this.$refs.commentBtn.disabled = true;
      this.$refs.commentBtn.style.cursor = "not-allowed";
    },
    emojiUnicode(emoji) {
      var comp;
      if (emoji.length === 1) {
        comp = emoji.charCodeAt(0);
      }
      comp =
        (emoji.charCodeAt(0) - 0xd800) * 0x400 +
        (emoji.charCodeAt(1) - 0xdc00) +
        0x10000;
      if (comp < 0) {
        comp = emoji.charCodeAt(0);
      }
      return "&#x" + comp.toString("16") + ";";
    },
    selectEmoji(emoji) {
      this.$refs.comment.focus();
      let emojiNode = document.createElement("span");
      emojiNode.innerHTML = emoji.data;
      this.range.insertNode(emojiNode);
      this.range.setStartAfter(emojiNode);
      this.sel.removeAllRanges();
      this.sel.addRange(this.range);
    },
    inInput(e) {
      this.comment = e.target.innerHTML;
      this.getCaretCharacterOffsetWithin(e.target);
    },
    getCursor(e) {
      this.getCaretCharacterOffsetWithin(e.target);
    },
    onSelect(e) {
      const file = this.$refs.file.files[0];
      if (!file) {
        e.preventDefault();
        alert("No file chosen");
        return;
      }
      if (file.size > 1024 * 1024) {
        e.preventDefault();
        alert("File too big (> 1MB)");
        return;
      }
      alert("File OK");
    },
  },
};
</script>
  
<style lang="scss">
img.emoji {
  width: 16px !important;
  height: 16px !important;
  max-width: 16px !important;
  max-height: 16px !important;
}
.emoji.border {
  border: none;
}
</style>
  
<style lang="scss" scoped>
.opacity {
  opacity: 0.5;
}
.control-container {
  background: #ecedf1;
  overflow: hidden;
  border-radius: 20px;
  flex-wrap: wrap;
}
.form-btn {
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 600;
}
.control-btn {
  font-size: 14px;
  width: 24px;
  color: #4f4f4f;
  svg {
    width: 18px;
  }
}
input {
  border: none;
  outline: none;
}
.comment {
  white-space: pre-wrap;
  word-wrap: break-word;
  min-width: 40%;
  max-width: 100%;
  outline: none;
  border: none;
  font-size: 14px;
  padding: 10px;
}
.comment-btn {
  font-size: 11px;
  padding: 5px 10px;
  background-color: #0084e3;
  border-radius: 5px;
  color: #FFF;
  margin-top: 2px;
}
.media-control-container {
  margin-left: auto;
}
.emoji-container {
  top: 100%;
  right: 0;
  z-index: 999;
}
.emoji-backdrop {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 990;
}
@media (max-width: 567px) {
  .control-btn {
    font-size: 13px;
    color: #4f4f4f;
    svg {
      width: 14px;
    }
  }
  .control-container {
    position: relative;
  }
}

.p-relative{
   position: relative;
} 

.p-absolute{
   position: absolute;
}

.w-full{
   width: 100%;
}

.flex {
   display: flex;
}

.justify-center{
   justify-content: center;
}

.items-center {
   align-items: center;
}

.ml{
   margin-left: 2px;
}

.px{
   padding-left: 0;
}

px-3 px-md-6
        
.py{
   padding-top: 2px;
}
          
</style>
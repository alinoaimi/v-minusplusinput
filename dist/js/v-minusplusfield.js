Vue.component('v-minusplusfield', {
    template: `

<div class="minusplusnumber">
    <div class="mpbtn minus" v-on:click="mpminus()">
        -
    </div>
    
    <div id="field_container">
        <input type="number" v-model="newValue" disabled />
    </div>
    
    <div class="mpbtn plus" v-on:click="mpplus()">
        +
    </div>
</div>



`,
    props: {
        value: {
            default: 0,
            type: Number
        },
        min: {
            default: 0,
            type: Number
        },
        max: {
            default: undefined,
            type: Number
        }

    },
    data: function () {
        return {
            newValue: 0
        }

    },
    methods: {
        mpplus: function() {
            if(this.max == undefined || (this.newValue < this.max)) {
                this.newValue = this.newValue + 1;
                this.$emit('input', this.newValue);
            }
        },
        mpminus: function() {
            if((this.newValue) > this.min) {
                this.newValue = this.newValue - 1;
                this.$emit('input', this.newValue);
            }
        }
    },
    watch: {
        value: {
            handler: function (newVal, oldVal) {
                this.newValue = newVal;
            }
        }
    },
    created: function() {
        this.newValue = this.value;
    }
});

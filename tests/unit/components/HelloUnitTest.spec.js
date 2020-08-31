import {shallowMount} from '@vue/test-utils'
import HelloUnitTest from '@/components/HelloUnitTest.vue'

const factory = (value = {}) =>{
    return shallowMount(HelloUnitTest,{
        data(){
            return {
                ...value
            }
        }
    })
}

describe('HelloUnitTest',()=>{
    
    it('แสดงข้อความต้อนรับ',()=>{
        const wrapper = factory()
        expect(wrapper.find('.message').text()).toEqual("Welcome to the Vue.js cookbook")
    })

    it("แสดงข้อความ Error เมื่อ กรอกข้อมูลน้อยกว่า 7 ตัวอักษร",()=>{
        const wrapper = factory({username:''})
        expect(wrapper.find('.error').exists()).toBeTruthy()
    })
    it("แสดงข้อความ Error เมื่อ Username ใส่ Whitespace",()=>{
        const wrapper = factory({username:''.repeat(7)})
        expect(wrapper.find('.error').exists()).toBeTruthy()
    })
    it('ไม่แสดงข้อความ Error เมื่อใส่ตัวอักษร มากกว่า 7 ตัว',()=>{
        const wrapper = factory({username : 'AtiwitInwza'});
        expect( wrapper.find(".error").exists()).toBeFalsy();
    })
})
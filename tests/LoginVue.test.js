import { mount } from "@vue/test-utils";
import { assert, describe, expect, it } from "vitest";
import Login from "../src/components/Login.vue";

describe("Elements in forms", () => {

    const loginComponent = mount(Login)
    it("ensures that the login form is present", ()=> {
       
        const loginUsernameInput = loginComponent.get("#login-input-username")
        const loginPasswordInput = loginComponent.get("#login-input-password")
        expect(loginUsernameInput).toBeTruthy()
        expect(loginPasswordInput).toBeTruthy() 
    })




})
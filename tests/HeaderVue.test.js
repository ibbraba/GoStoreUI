
import { mount, shallowMount } from "@vue/test-utils";
import { expect, vi } from "vitest";
import { describe, it } from "vitest";
import Footer from "../src/components/Footer.vue";
import Login from "../src/components/Login.vue";
import Header from "../src/components/Header.vue";





describe("Presence of Phrases in header and footer", () => {

    it("ensure the title is present", async  () => {

        const header = shallowMount(Header)
        const LogginButton = header.get(".title")
        expect(LogginButton.text()).toBe("GoStore")
    })

    it("ensure the footer has text", async  () => {

        const footer = mount(Footer)
 
        expect(footer.text()).toBe("GoStore quality content.")
    })

})



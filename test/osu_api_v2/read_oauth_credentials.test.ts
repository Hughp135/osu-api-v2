// Package imports
import { describe, it } from "mocha"
import { expect } from "chai"
// Local imports
import { readOauthCredentials } from "./read_oauth_credentials"

describe("osu-api-v2-readOauthCredentials", () => {
    it("readOauthCredentials", async () => {
        const oauthCredentials = await readOauthCredentials()
        expect(oauthCredentials.clientId).to.be.a("number")
        expect(oauthCredentials.clientId).to.be.above(0)
        expect(oauthCredentials.clientSecret).to.be.a("string")
        expect(oauthCredentials.clientSecret.length).to.be.above(0)
    })
})

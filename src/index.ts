import "dotenv/config"
import pkg from "@slack/bolt"
const { App } = pkg

// Initializes your app with your bot token and signing secret
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SECRET_SIGNING,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN,
})

app.message("hello", async ({ message, client, say }) => {
    // FOR AN OPEN CHANNEL
    console.log(message)
    const { channel: channelId } = message
    //await client.chat.postMessage({ channel: channelId, text: "Hello from MediaOS" })
    await say("hello back")

    // FOR DM MESSAGES
    /* const chat = await client.conversations.open({
        prevent_creation: true,
        return_im: true,
        users: "UURMB0KCP",
    })
    const channelId = chat.channel?.id
    await client.chat.postMessage({
        //token: process.env.SLACK_BOT_TOKEN,
        channel: channelId ? channelId : "CUDNAF473",
        text: "Test",
    })
    console.log("wrote DM message successfully") */
})

app.command("/mediaos", async ({ command, ack, respond }) => {
    // Acknowledge command request
    await ack()

    await respond(`Bot is up and running ⚡️`)
})

app.command("/bot-status", async ({ command, ack, respond }) => {
    // Acknowledge command request
    await ack()

    await respond(`Bot is up and running ⚡️`)
})

app.command("/job-info", async ({ command, ack, respond, client }) => {
    await ack()
    const user = command.user_id

    await respond({
        blocks: [
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `Hello, <@${user}>. The MediaOS Job <JOB Name> is now <Job Status>. Visit MediaOS for further details.`,
                },
                accessory: {
                    type: "button",
                    text: {
                        type: "plain_text",
                        text: "Go to MediaOS Job",
                        emoji: true,
                    },
                    value: "click_me_123",
                    url: "http://localhost:3000/jobs/2f4cf73b-8952-48c8-99dc-4667c6217479", // this needs to be dynamic
                    action_id: "button-action",
                },
            },
        ],
    })

    console.log(command)

    // FOR DM MESSAGES -- It sends the message both on the place where you triggered the command (only visible to the user) and the DM channel with the bot
    /* const chat = await client.conversations.open({
        prevent_creation: true,
        return_im: true,
        users: "UURMB0KCP",
    })
    const channelId = chat.channel?.id
    await client.chat.postMessage({
        //token: process.env.SLACK_BOT_TOKEN,
        channel: channelId ? channelId : "CUDNAF473",
        blocks: [
            {
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `Hello, <@${user}>. The MediaOS Job <JOB Name> is now <Job Status>. Visit MediaOS for further details.`,
                },
                accessory: {
                    type: "button",
                    text: {
                        type: "plain_text",
                        text: "Go to MediaOS Job",
                        emoji: true,
                    },
                    value: "click_me_123",
                    url: "http://localhost:3000/jobs/2f4cf73b-8952-48c8-99dc-4667c6217479", // this needs to be dynamic
                    action_id: "button-action",
                },
            },
        ],
    })
    console.log("wrote DM message successfully") */
})

const slackApp = async () => {
    await app.start(process.env.PORT || 3000)

    app.logger.info("⚡️ Bolt app is running!")
}

slackApp()

# Slack Messaging Bot

This repository contains the code for a Slack messaging bot designed to automate and streamline communication within your workspace.

## Dependencies

Before running the bot, ensure the following dependencies are installed:

-   [@slack/bolt](https://www.npmjs.com/package/@slack/bolt)
-   [dotenv](https://www.npmjs.com/package/dotenv)

### Dev dependencies

-   [nodemon](https://www.npmjs.com/package/nodemon)

Install dependencies by running:

```bash
npm install
```

## Environment Variables

The bot requires the following environment variables to be set:

-   `SLACK_APP_ID`: The ID of your Slack app.
-   `SLACK_CLIENT_ID`: The Slack app's client secret
-   `SLACK_CLIENT_SECRET`: The Slack app's client secret
-   `SLACK_SIGNING_SECRET`: The Slack app's signing secret
-   `SLACK_BOT_TOKEN`: The bot token from your Slack app.
-   `SLACK_APP_TOKEN`: The app token from your Slack app.
-   `SLACK_CHANNEL_ID`: ID for the channel
-   `PORT`: The port on which the bot will run (default: `3000`).

## Setting Up Environment Variables

To set up the environment variables:

1. Create a `.env` file in the root of the repository.
2. Add the following lines to the `.env` file:

```env
SLACK_APP_ID=
SLACK_CLIENT_ID=
SLACK_CLIENT_SECRET=
SLACK_SECRET_SIGNING=
SLACK_BOT_TOKEN=
SLACK_CHANNEL_ID=""
SLACK_APP_TOKEN=
PORT=
```

3. Replace each environment variable based on the values provided when setting up the Slack App in `https://api.slack.com/apps`

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/slack-messaging.git
cd slack-messaging
```

2. Install dependencies:

```bash
npm install
```

3. Start the bot (for development/testing):

```bash
npm run dev
```

The bot should now be running and listening for events on the specified port.

## Configuring the App on Slack Dev's Portal

1. Go to [Slack's Apps Site](https://api.slack.com/apps) and click on "Create New App" on the right
2. A "Create an App" Modal will appear, presenting two options: "From a Manifest" and "From Scratch". Select "From Scratch."
3. Fill out the form with the name of your app and the workspace where the app will be developed. Click on "Create App."
4. You will be taken to you App's "Basic Information" Page. From there extract the following information and add it to your `.env` file
    - App ID
    - Client ID
    - Client Secret
    - Signing Secret
5. Generate an App Level Token for your App. To do this, scroll down to the "App-Level Tokens" Section in the Basic Information page of your App, and click on "Generate Token and Scopes". Add a name for your token and then the scopes you wish to grant. In this case, we only need the `connections:write` scope. An app token will be generated. Make sure to copy it into the `.env` file
6. On the left menu of your Slack's App, go to "Settings" -> "Socket Mode". Enable Socket Mode on the "Connect Using Socket Mode" switch.
7. In order for the Bot to be alert to messages it needs to be suscribed to events. From the "Socket Mode" page, click on the "Event Subscriptions" link inside the "Features affected" section of the page. You will be taken to the Event Subscriptions Page, wherein you need to enable events by clicking on the "Enable Events" switch.
8. After enabling events we need to suscribe the bot to specific events. To do so, click on "Suscribe to bot events" section. You will need to manually add the necessary Bot User Events to your app. For this POC, the needed events are the following:
    - `message.channels`
    - `message.groups`
    - `message.im`
    - `message.mpim`
    - `channels:history`
    - `channels:write.invites`
    - `channels:write.topic`
    - `chat.write`
    - `groups.history`
    - `groups.write`
    - `im.history`
    - `im.write`
    - `incoming-webhook`
    - `mpim.history`
    - `mpim.write`
    - `commands`
9. Once all scopes are added, click on "Save Changes" at the bottom right of your screen.
10. Go to "Slash Commands" on the left menu and once there, click on "Create New Command". A modal will pop up for you to set up the slash commands you need. On the form, give a name to your command. For this POC we will add `/bot-status`. Add a description to your command and a usage hint if you so desire. Click "Save" to finish setting up the slash command.

## Additional Resources

-   [Slack API Documentation](https://api.slack.com/)
-   [Bolt for JavaScript Documentation](https://slack.dev/bolt-js/)

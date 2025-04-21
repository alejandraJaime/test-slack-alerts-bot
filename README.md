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

## Additional Resources

-   [Slack API Documentation](https://api.slack.com/)
-   [Bolt for JavaScript Documentation](https://slack.dev/bolt-js/)

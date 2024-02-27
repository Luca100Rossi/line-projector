{  "sender" : "",
  "supportEmail" : "example@example.com",
  "costPerBlock" : 1
}

    {
      "cookbookID": "testCookbookID",
      "itemID": "11111111"
    }

          {
            "Key": "level",
            "MinValue": "1",
            "MaxValue": "2"
          }

const createDiscordMessage = (error) => {
  var embeds = []
  let message = {
    "text": "GCP Alerts",
    "blocks": [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "ERR:"  + error
        }

      }

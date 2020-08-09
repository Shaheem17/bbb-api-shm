# bbb-api-shm
Integrate the world's best opensource live streaming platform bigbluebutton on your Node.JS application

## Install
```
npm i bbb-api-shm
```

## Get your bigbluebutton server details
```
bbb-config --secret 
```

## Usage
```js

let bbb_shm = require('bbb-api-shm');

let credentials = {
  salt: salt, //Your server salt here
  url: url, //your domain name. for example https://your.site.com
};

let body = {
    name:"Daily Meeting",
    meetingID:"123456",
    moderatorPW:"qwerty"
}

let bbb = await bbb_shm.bbb(credentials, "create", body);
console.log("Final Response: " + bbb);
```

## BigBlueButton API

### Create
Creates a BigBlueButton meeting.

#### Sample JSON
To know all the object keys please visit: https://docs.bigbluebutton.org/dev/api.html

```js
body = {
        name: 'shm',
        meetingID: '123',//Required
        attendeePW: 'qwerty',//recommended
        moderatorPW: '123456',//recommended
        welcome: 'Welcome to Meeting',
        dialNumber: '',
        voiceBridge: '',
        maxParticipants: '',
        logoutURL: '',
        record: '-1',
        duration: 60,
        meta: '',
        autoStartRecording: true
    };
```

### Join
Joins a user to the meeting specified in the meetingID parameter.

#### Sample JSON
To know all the object keys please visit: https://docs.bigbluebutton.org/dev/api.html

```js
body = {
        fullName: 'Shaheem M Shereef',//Required
        meetingID: '123',//Required
        password: 'qwerty',//Required
    };
```

### isMeetingRunning
This call enables you to simply check on whether or not a meeting is running by looking it up with your meeting ID.

#### Sample JSON
To know all the object key please visit: https://docs.bigbluebutton.org/dev/api.html

```js
body = {
        meetingID: '123',//Required
    };
```

### end
Use this to forcibly end a meeting and kick all participants out of the meeting.

#### Sample JSON
To know all the object key please visit: https://docs.bigbluebutton.org/dev/api.html

```js
body = {
        meetingID: '123',//Required
        password: 'qwerty',//Required
    };
```

### getMeetingInfo
This call will return all of a meeting’s information, including the list of attendees as well as start and end times.

#### Sample JSON
To know all the object key please visit: https://docs.bigbluebutton.org/dev/api.html

```js
body = {
        meetingID: '123',//Required
    };
```

### getMeetings
This call will return a list of all the meetings found on this server.

### getRecordings
Retrieves the recordings that are available for playback for a given meetingID (or set of meeting IDs).

#### Sample JSON
To know all the object key please visit: https://docs.bigbluebutton.org/dev/api.html

```js
body = {
        meetingID: '123',//Optional
    };
```

### publishRecordingsAnchor 
Publish and unpublish recordings for a given recordID (or set of record IDs).

#### Sample JSON
To know all the object key please visit: https://docs.bigbluebutton.org/dev/api.html

```js
body = {
        recordID: '123',//Required
        publish: 'true',//Required
    };
```

### deleteRecordings
Delete one or more recordings for a given recordID (or set of record IDs).

#### Sample JSON
To know all the object key please visit: https://docs.bigbluebutton.org/dev/api.html

```js
body = {
        recordID: '123',//Required
    };
```

### updateRecordings
Update metabody for a given recordID (or set of record IDs).

#### Sample JSON
To know all the object key please visit: https://docs.bigbluebutton.org/dev/api.html

```js
body = {
        recordID: '123',//Required
    };
```
## Contributor
Shaheem M Shereef 
Contact me: shaheem.951@gmail.com
or visit http://shmportfolio.com/

## For More Information about API CALL
Visit: https://docs.bigbluebutton.org/dev/api.html 
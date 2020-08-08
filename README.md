# bbb-api-shm
Integrate the world's best opensource live streaming platform bigbluebutton on your Node.JS application

# Sample Code

let bbb_shm = require('bbb-api-shm');

let credentials = {
  salt: salt, //Your server salt here use bbb-config --secret to get this info
  url: url, //your domain name for example https://your.site.com
};

let body = {
    name:"Daily Meeting",
    meetingID:"123456",
    moderatorPW:"qwerty"
}

let bbb = await bbb_shm.bbb(credentials, "create", body);
console.log("Final Response: " + bbb);

# BigBlueButton API

# Create
Creates a BigBlueButton meeting.

# Join
Joins a user to the meeting specified in the meetingID parameter.

# isMeetingRunning
This call enables you to simply check on whether or not a meeting is running by looking it up with your meeting ID.

# end
Use this to forcibly end a meeting and kick all participants out of the meeting.

# getMeetingInfo
This call will return all of a meeting’s information, including the list of attendees as well as start and end times.

# getMeetings
This call will return a list of all the meetings found on this server.

# getRecordings
Retrieves the recordings that are available for playback for a given meetingID (or set of meeting IDs).

# publishRecordingsAnchor 
Publish and unpublish recordings for a given recordID (or set of record IDs).

# deleteRecordings
Delete one or more recordings for a given recordID (or set of record IDs).

# updateRecordings
Update metadata for a given recordID (or set of record IDs).

# For More Information about API CALL
Visit: https://docs.bigbluebutton.org/dev/api.html 
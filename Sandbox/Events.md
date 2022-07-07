## Text-Sourcing



## Event-Sourcing

Each version of an Application has its own append-only log of events.



## Components

- Event Producers
- Event Managers
- Event Consumers

## Application Events

STARTUP
  - LOAD_APPLICATION
  - LOAD_CURRENT_USER
  - #AuthenticateUser
  - #RegisterNewUser
  - LOAD_APPLICATION_STATE
  - VerifyState
  - Create Default 
SHUTDOWN

INITIALIZE_DEFAULT_APPLICATION_STATE

## Domain Events

REGISTER_APPLICATION_CLIENT
REGISTER_USER
STATE_CHANGED

## Entity Events
CREATE_$ref
RETRIEVE/Entity/$ref
RETRIEVE/Entity/$ref/ID

NEW_DOCUMENT
NEW_SECTION
EDIT_SECTION
NEW_ITEM
EDIT_ITEM


## Services/EventHandlers

Note: Perhaps we just name these after events and use the router to do the right thing.

LoadCurrentUser
RegisterNewUser
RegisterNewApplicationClient
LoadDefaultApplicationState
CreateNewDocument
CreateNewSection
AuthenticateUser



## Example Stream

```javascript
[
    {
        "event_type": "NEW_DOCUMENT",
        "user": UUID.uuidv4(),
        "datetime": > (new Date()).toISOString(),
        "payload": {"$ref": "/Entity/Document", "id": UUID.uuidv4() }
    },
    {
        "event_type": "EDIT_DOCUMENT",
        "user": UUID.uuidv4(),
        "datetime": > (new Date()).toISOString(),
        "payload": {"$ref": "/Entity/Document"}
    }
    {
        "event_type": "EDIT_DOCUMENT",
        "user": UUID.uuidv4(),
        "datetime": > (new Date()).toISOString(),
        "payload": {"$ref": "/Entity/Document"}
    }
```

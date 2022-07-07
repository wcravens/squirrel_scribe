# Entities and Values from the Inside Out

## Environment ( Built into WebPack for Node and Browser )

APPLICATION_CLIENT_ID: uuid.uuidv4()
https://www.uuidgenerator.net/

## ClientApplication
    id: UUIDv4()
    platform: 'Web_Client"
    build: uuidv4() or git commit hash
    version
    build_quality
    registration_timestamp

## User
    id
    name
    email
    registration_timestamp 

## DocumentEntity
    id
    create_on
    updated_on
    entity_type
    parent
    children
    history_id

## Document
    $ref: DocumentEntity
    title

## Section
    $ref: DocumentEntity 
    header
    content

## Item
    $ref: DocumentEntity 
    header
    content


# Entities and Values from the Inside Out

## Environment ( Built into WebPack for Node and Browser )

APPLICATION_CLIENT_ID: uuid.uuidv4()
https://www.uuidgenerator.net/

## Entity
    id
    create_on
    updated_on
    type

## ApplicationClient
    $ref: Entity
    name
    build
    version
    build_quality

## Application

## ApplicationState
    $ref: Entity

## User
    $ref: Entity 
    name
    email

## Cursor
    Is an Entity
    Has a User: $ref: User

## Document
    $ref: Entity
    title

## DocumentEntity
    $ref: Entity
    parent
    children

## Section
    $ref: Entity
    header
    content

## Item
    $ref: Entity
    header
    content

## Cursor


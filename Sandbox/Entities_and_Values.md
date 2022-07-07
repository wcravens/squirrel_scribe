# Entities and Values


## Entity 

## Environment (Build into WebPack)

APPLICATION_CLIENT_ID: uuid.uuidv4()
https://www.uuidgenerator.net/

## Entity
    id
    create_on
    updated_on
    type
    parent
    children

## Application
    $ref: Entity
    name
    build_version
    build_quality

## ApplicationState
    $ref: Entity

## User
    $ref: Entity 
    name
    email

## Document
    $ref: Entity
    title

## Section
    $ref: Entity
    header
    content

## Item
    $ref: Entity
    header
    content


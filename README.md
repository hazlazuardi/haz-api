This project is the back-end for all Hazlazuardi's front-end projects. The stack used in this project includes [NextJs](https://nextjs.org/), [Prisma](https://prisma.io), and [PostgreSQL](https://postgresql.org).

NextJs is the back end of the project. Prisma is responsible as an ORM. Lastly, this project uses PostgreSQL as the database.

# Getting Started
## Prerequisites
Make sure your machine has Docker installed and ready to use. Follow the documentation here to get started with Docker.
Also, make sure to clone this repository into your local machine.

# Running the App
## NextJS app
To run the development server: 
```bash
docker compose up -d
```

After the docker container status becomes running, you can access the app on `http://localhost:8080`.

## Prisma Studio
Prisma Studio is a modern GUI to access and manage data inside the database that connects with a Prisma project. 

Since this project uses Prisma as the ORM, you can utilize Prisma Studio.

To open Prisma Studio:
1. Open Docker Desktop.
2. Open the project container's CLI.

In the project container's CLI, run:
```bash
npx prisma studio
```

After Prisma Studio status becomes running, you can access it on `http://localhost:5555`.

# Featured Project

## [Ogcisum](https://github.com/hazlazuardi/ogcisum_web)
There are three main objects in this project. Below are the endpoints to do the CRUD operations.

### Get all samples
```bash
api/ogcisum/samples?mode=read
```

### Create a sample
```bash
api/ogcisum/samples?mode=create&sampleType=${sampleType}&sampleName=${sampleName}
```
- `${sampleType}` — the instrument of the sample.
- `${sampleName}` — the name of the sample.

### Edit a sample
```bash
api/ogcisum/samples?mode=update&sampleType=${sampleType}&sampleName=${sampleName}&id=${id}`
```
- `${sampleType}` — the instrument of the sample.
- `${sampleName}` — the name of the sample.
- `${id}` — the id of the sample.


### Get all locations
```bash
api/ogcisum/locations?mode=read
```

### Get all samples to locations pivot table
```bash
api/ogcisum/samplesToLocations?mode=read
```

### Share a sample to a location
```bash
api/ogcisum/samplesToLocations?mode=create&sampleID=${sampleID}&locationID=${locationID}
``` 
- `${sampleID}` — the id of the sample.
- `${locationID}` — the id of the location.

### Unshare a sample with a location
```bash
api/ogcisum/samplesToLocations?mode=delete&id=${relID}
```
- `${relID}` — the id of the `samplesToLocations` object.



# Upcoming projects
1. [Markaz Pilar](https://github.com/hazlazuardi/markaz-pillar-fe)
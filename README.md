# Title

P1 F1 Database

# Team Name 
Team #21 (Sections 4 and 3)

# Team Members:
Ryan Schaefer S3 #21

Alisa Possner S4 #21

Moe Suzuki S4 #21

# Description
Our implementation of the project is a tracker for F1 races, teams, and driver. Our porject meets the requirements with the following relationships:

- User data model 
  - Driver
- Domain Object data models:
  - Team
  - Race
  - Employee
- Relationships
  - One To Many
    - Team to Driver
    - Team to Employee
  - Many to Many
    - Driver to Race (through standing reification)
- Portable Enumeration
  - Finishing Type (drivers can finish, not start, or not finish)

# UML Class Diagram

[our UML diagram](./db_design_final_project_UML.pdf)

# User Data Model

Represents an F1 driver with the required fields of the user data model.

# Domain Object Data Models

Team - represents a team that an F1 driver can be part of with a budget and a CEO.

Race - represents a race that is held with an official title for that race, a location of the race (the country), the track in that country, and the number of laps in the race

Employee - Represents anyone who is working in F1 besides the drivers

# User to domain object relationship

Team <-> Driver - a driver is part of one team, but a team can have many drivers (normally 2 with any additional considered reserve)

# Domain to Domain object relationship

Team <-> Employee - a team has many employees (which aren't drivers because drivers are considered special) that work on the car, in the pitlane, and also as engineers.

# Portable Enumeration

Finish Type - some drivers can not start (due to health issues or being reserves), some can also not finish (due to crashing during the race), and finally if neither are true, they get the default finish type.

# User Interface

To be finished in P2



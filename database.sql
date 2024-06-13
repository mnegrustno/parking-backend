-- ver 1.0 (dnt use)

create table if not exists parkingplace(
placeid SERIAL PRIMARY KEY,
	email VARCHAR(255) NOT NULL,
	fullname VARCHAR(255) NOT NULL,
	placetype VARCHAR(255) NOT NULL,
	parkingplace VARCHAR(255) NOT NULL,
	starttime VARCHAR(255) NOT NULL,
	endtime VARCHAR(255) NOT NULL	
);

-- ver 2.0

CREATE TABLE IF NOT EXISTS parkingplace(
    ID SERIAL PRIMARY KEY,
    Email VARCHAR(255) NOT NULL,
    Fullname VARCHAR(255) NOT NULL,
    Place_Type VARCHAR(255) NOT NULL,
    Parking_Place VARCHAR(255) NOT NULL,
    Start_Time VARCHAR(255) NOT NULL,
    End_Time VARCHAR(255) NOT NULL,
    state BOOLEAN NOT NULL 
);
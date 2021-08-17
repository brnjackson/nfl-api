CREATE DATABASE nfl;
USE nfl;
CREATE TABLE teams (
    ID INT auto_increment,
    Location varchar(255),
    Mascot varchar(40),
    Abbreviation varchar(5),
    Conference ENUM ('AFC', 'NFC'),
    Division ENUM ('West', 'East', 'North', 'South'),
    PRIMARY KEY (ID)
);
INSERT INTO teams (
        Location,
        Mascot,
        Abbreviation,
        Conference,
        Division
    )
VALUES ('Buffalo', 'Bills', 'BUF', 'AFC', 'East'),
    ('Miami', 'Dolphins', 'MIA', 'AFC', 'East'),
    ('New England', 'Patriots', 'NE', 'AFC', 'East'),
    ('New York', 'Jets', 'NYJ', 'AFC', 'East'),
    ('Balitimore', 'Ravens', 'BAL', 'AFC', 'North'),
    ('Cincinnati', 'Bengals', 'CIN', 'AFC', 'North'),
    ('Cleveland', 'Browns', 'CLE', 'AFC', 'North'),
    ('Pittsburgh', 'Steelers', 'PIT', 'AFC', 'North'),
    ('Houston', 'Texans', 'HOU', 'AFC', 'South'),
    ('Indianapolis', 'Colts', 'IND', 'AFC', 'North'),
    ('Jacksonville', 'Jaguars', 'JAX', 'AFC', 'North'),
    ('Tennessee', 'Titans', 'TEN', 'AFC', 'North'),
    ('Denver', 'Broncos', 'DEN', 'AFC', 'West'),
    ('Kansas City', 'Chiefs', 'KC', 'AFC', 'West'),
    ('Los Angeles', 'Chargers', 'LAC', 'AFC', 'West'),
    ('Oakland', 'Raiders', 'OAK', 'AFC', 'West'),
    ('Dallas', 'Cowboys', 'DAL', 'NFC', 'East'),
    ('New York', 'Giants', 'NYG', 'NFC', 'East'),
    ('Philadelphia', 'Eagles', 'PHI', 'NFC', 'East'),
    ('Washington', 'Redskins', 'WSH', 'NFC', 'East'),
    ('Chicago', 'Bears', 'CHI', 'NFC', 'North'),
    ('Detriot', 'Lions', 'DET', 'NFC', 'North'),
    ('Green Bay', 'Packers', 'GB', 'NFC', 'North'),
    ('Minnesota', 'Vikings', 'MIN', 'NFC', 'North'),
    ('Atlanta', 'Falcons', 'ATL', 'NFC', 'South'),
    ('Carolina', 'Panthers', 'CAR', 'NFC', 'South'),
    ('New Orleans', 'Saints', 'NO', 'NFC', 'South'),
    ('Tampa Bay', 'Buccaneers', 'TB', 'NFC', 'South'),
    ('Arizona', 'Cardinals', 'ARI', 'NFC', 'West'),
    ('Los Angeles', 'Rams', 'LAR', 'NFC', 'West'),
    ('San Francisco', '49ers', 'SF', 'NFC', 'West'),
    ('Seattle', 'Seahawks', 'SEA', 'NFC', 'West');
SELECT *
FROM teams;
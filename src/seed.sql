-- Added to Supabase, query called Social Media Tables

DROP TABLE IF EXISTS social_users CASCADE; 
DROP TABLE IF EXISTS social_posts CASCADE; 
DROP TABLE IF EXISTS social_followers_junction CASCADE;

CREATE TABLE IF NOT EXISTS social_users (
    id SERIAL PRIMARY KEY,
    clerk_id VARCHAR(100),
    username VARCHAR(100),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    about TEXT
);

CREATE TABLE IF NOT EXISTS social_posts (
    id SERIAL PRIMARY KEY,
    profile_id INT REFERENCES social_users(id),
    content TEXT
);

CREATE TABLE IF NOT EXISTS social_followers_junction (

id SERIAL PRIMARY KEY,
follower_id INT REFERENCES social_users(id),
followee_id INT REFERENCES social_users(id) 
);
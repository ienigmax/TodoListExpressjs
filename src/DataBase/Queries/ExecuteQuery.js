import sqlite from 'sqlite';

const dbPromise = sqlite.open('../database.sqlite', { Promise });

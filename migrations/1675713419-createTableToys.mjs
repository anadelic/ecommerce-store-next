export async function up(sql) {
  await sql`
	CREATE TABLE toys(
		id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    toy_name varchar(100) NOT NULL,
		toy_description varchar(1000) NOT NUll,
		price varchar(10) NOT NULL
	)`;
}

export async function down(sql) {
  await sql`
	DROP TABLE toys`;
}

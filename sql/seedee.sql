use cms_db;

INSERT INTO employee
    (first_Name, lastName, manager_id, role_id)
VALUES
    ("john", "doe", "ashley rodriguez", 10),
    ("mike", "chan", "john doe", 11),
    ("ashley", "rodriguez", null, 20),
    ("kevin", "tupik", "ashley rodriguez", 21),
    ("malia", "brown", null, 31),
    ("sarah", "lourd", null, 40),
    ("tom", "allen", "sarah lourd", 41),
    ("christian", "eckenrode", "mike chan", 20);
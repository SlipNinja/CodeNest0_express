INSERT INTO `courses`(`id_course`, `name`, `logo`, `level`, `description`, `programming_language`, `number_step`)
VALUES (1, 'First steps', 'js.png', 'beginner.png', 'Learn the basis of Javascript !','js', 3);

INSERT INTO `courses`(`id_course`, `name`, `logo`, `level`, `description`, `programming_language`, `number_step`)
VALUES (2, 'Functions', 'js.png', 'easy.png', 'Learn the basis of Javascript functions !','js', 0);

INSERT INTO `dependency_course` (`id_course`, `id_dependency_course`)
VALUES (2, 1);

INSERT INTO `steps`(`id_step`, `number`, `element_name`, `element_is_function`, `exercise`, `id_course`)
VALUES (1, 1, 'greeting', FALSE,'Blabla les variables, create a variable named "greeting" and assign it the value "hello", then press RUN !', 1);

INSERT INTO `steps`(`id_step`, `number`, `element_name`, `element_is_function`, `exercise`, `id_course`)
VALUES (2, 2, 'number', FALSE,'Blabla les variables, create a variable named "number" and assign it the value 10, then press RUN !', 1);

INSERT INTO `steps`(`id_step`, `number`, `element_name`, `element_is_function`, `exercise`, `id_course`)
VALUES (3, 3, 'state', FALSE,'Blabla les variables, create a variable named "state" and assign it the value False, then press RUN !', 1);

INSERT INTO `tests`(`expected_result`, `result_type`, `id_step`)
VALUES ('hello', 'string', 1);

INSERT INTO `tests`(`expected_result`, `result_type`, `id_step`)
VALUES (10, 'number', 2);

INSERT INTO `tests`(`expected_result`, `result_type`, `id_step`)
VALUES (False, 'boolean', 3);

INSERT INTO `tags`(`name`)
VALUES ('javascript');

INSERT INTO `tags`(`name`)
VALUES ('beginner');

INSERT INTO `course_tag`(`id_course`, `id_tag`)
VALUES (1, 1);

INSERT INTO `course_tag`(`id_course`, `id_tag`)
VALUES (1, 2);
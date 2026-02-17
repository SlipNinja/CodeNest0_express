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

INSERT INTO `tests`(`id_test`, `expected_result`, `result_type`, `id_step`)
VALUES (1, 'hello', 'string', 1);

INSERT INTO `tests`(`id_test`, `expected_result`, `result_type`, `id_step`)
VALUES (2, 10, 'number', 2);

INSERT INTO `tests`(`id_test`, `expected_result`, `result_type`, `id_step`)
VALUES (3, False, 'boolean', 3);

INSERT INTO `tags`(`name`)
VALUES ('javascript');

INSERT INTO `tags`(`name`)
VALUES ('beginner');

INSERT INTO `course_tag`(`id_course`, `id_tag`)
VALUES (1, 1);

INSERT INTO `course_tag`(`id_course`, `id_tag`)
VALUES (1, 2);

INSERT INTO `steps`(`id_step`, `number`, `element_name`, `element_is_function`, `exercise`, `id_course`)
VALUES (4, 1, 'get_number', TRUE,'Blabla les fonctions, create a fonction named "get_number" that returns the value 5, then press RUN !', 2);

INSERT INTO `steps`(`id_step`, `number`, `element_name`, `element_is_function`, `exercise`, `id_course`)
VALUES (5, 2, 'increment_number', TRUE,'Blabla les fonctions et les additions, create a function named "increment_number" that take a parametter and return it incremented by 1, then press RUN !', 2);

INSERT INTO `tests`(`id_test`, `expected_result`, `result_type`, `id_step`)
VALUES (4, 5, 'number', 4);

INSERT INTO `tests`(`id_test`, `expected_result`, `result_type`, `id_step`)
VALUES (5, 6, 'number', 5);

INSERT INTO `tests`(`id_test`, `expected_result`, `result_type`, `id_step`)
VALUES (6, 11, 'number', 5);

INSERT INTO `tests`(`id_test`, `expected_result`, `result_type`, `id_step`)
VALUES (7, 69, 'number', 5);

INSERT INTO `params`(`type`, `content`, `number`, `id_test`)
VALUES ('number', 5, 1, 4);

INSERT INTO `params`(`type`, `content`, `number`, `id_test`)
VALUES ('number', 5, 1, 5);

INSERT INTO `params`(`type`, `content`, `number`, `id_test`)
VALUES ('number', 10, 1, 6);

INSERT INTO `params`(`type`, `content`, `number`, `id_test`)
VALUES ('number', 68, 1, 7);
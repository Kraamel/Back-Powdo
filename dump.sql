create type task_status as enum ('todo', 'doing', 'done');

alter type task_status owner to postgres;

create table task
(
  id         serial       not null
    constraint task_pk
      primary key,
  title      varchar(255) not null,
  detail     text,
  status     task_status default 'todo'::task_status,
  created_at timestamp   default now(),
  updated_at timestamp   default now()
);

alter table task
  owner to postgres;

INSERT INTO task (id, title, detail, status, created_at, updated_at)
VALUES (1, 'test1', null, 'todo', now(), now());
INSERT INTO task (id, title, detail, status, created_at, updated_at)
VALUES (2, 'test2', null, 'todo', now(), now());
INSERT INTO task (id, title, detail, status, created_at, updated_at)
VALUES (3, 'test3', null, 'doing', now(), now());
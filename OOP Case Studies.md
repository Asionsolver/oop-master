### Client Requirements

Build a University Management System where admin can manage students, guardians, teachers, staff, departments, subjects, exams, and Accounts.

Admin can create, update, delete and manage all the resources.

### Breakdown The Requirement

**Finds Object**

1. **Students**
2. **Guardian**
3. **Teachers**
4. **Staff**
5. **Departments**
6. **Subjects**
7. **Exams**
8. **Accounts**

**Students**

`id`

`name`

`guardian`

`contact`

`account`

`exams`

`department`

`blood`

**Guardian**

`id`

`name`

`contact`

`profession`

`income`

`blood`

**Teacher**

`id`

`name`

`contact`

`blood`

`department`

`subject`

`salar**y**`

**Staff**

`id`

`name`

`contact`

`blood`

`department`

`title`

`salary`

**Contact**

`id`

`email`

`phone`

`alternative phone`

`address`

**Address**

`id`

`road no`

`city`

`region`

`country`

`postal code`

**Department**

`id`

`name`

`subject`

`dean(Teacher)`

`teacher`

**Subject**

`id`

`name`

`credit`

`department`

**Exam**

`id`

`name`

`pass mark`

`duration`

`subject`

`student`

**Account**

`id`

`type`

`amount`

`date&time`

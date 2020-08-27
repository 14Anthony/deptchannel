# deptchannel

# Anthony README

# DESCRIPTION:

The project requested that we design the following database schema containing three tables as copied from the origina README from BCS:

* **department**:

  * **id** - INT PRIMARY KEY
  * **name** - VARCHAR(30) to hold department name

* **role**:

  * **id** - INT PRIMARY KEY
  * **title** -  VARCHAR(30) to hold role title
  * **salary** -  DECIMAL to hold role salary
  * **department_id** -  INT to hold reference to department role belongs to

* **employee**:

  * **id** - INT PRIMARY KEY
  * **first_name** - VARCHAR(30) to hold employee first name
  * **last_name** - VARCHAR(30) to hold employee last name
  * **role_id** - INT to hold reference to role employee has
  * **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager
  
Once the databse and seed.sql was entered into mySqyl we were asked to build a command-line application that at a minimum allows the user to:

  * Add departments, roles, employees

  * View departments, roles, employees

  * Update employee roles



# Installation,Usage,License,Contributor,Tests,Questions

# USAGE:

This is a tool that would allow individual to maintain a human resources application for adding and updating imployees and salaries, simply and easily.

# LICENESES : MIT

# @bigchsta62, T.J. the sub, Mike the T.A. and Luis the tutor

# QUESTIONS:    Belcastt@live.com, @14Anthony

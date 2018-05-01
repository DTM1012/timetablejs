/* Scenarios: 
   - Lập lịch các lớp học 
   - Danh sách giảng viên
   - Có danh sách phòng (set)
   - Có danh sách các lớp cần dạy (set)
   - Có danh sách các tiết trong tuần. Mỗi tiết tương ứng với một số tín nhất định (ví dụ: 3) 
   - Các lớp học đều được sắp xếp
   - Mỗi lớp có số tín chỉ đã biết (nguyên)
   - Mỗi giảng viên chỉ dạy được một số môn nhất định (LC) (binary)
   - Mỗi giảng viên đăng ký các slot có thể dạy (LS) (binary)
   - Mỗi giảng viên dạy không quá số lớp cho trước (integer)//
   - Mỗi phòng chỉ được dạy một số môn nhất định (RC) (binary)
   - Tại một thời điểm không có quá 1 lớp dạy tại một phòng
   - Phòng học đủ sức chứa lớp học nhất định
   * một lịch hợp lệ là một giá trị x(l, r, c, s)=1 tương ứng với l, r, c, s.    x(l, r,c,s) = 1 nghĩa là l dạy được c tại slot s
*/
/*
	Model Section
*/
#Sets
set L; /* Lecturers */ 
set R; /* Rooms */
set C; /* Classes */
set S; /* Slots */

set LC dimen 2;
set LS dimen 2;
set RC dimen 2;


#Parameters

param Credits{c in C} integer;
param Teachability_LC{l in L, c in C};
param Availability{l in L, s in S};
param Teachability_RC{r in R, c in C};
param Demand_C{c in C};
param Capacity_R{r in R};

table l_L IN "iODBC"
  'DSN=glpkdb;UID=root;PWD=123456;DATABASE=glpkdb'
  'SELECT idLecturer'
  'FROM lecturers' :
   L <- [ idLecturer ];

table l_S IN "iODBC"
  'DSN=glpkdb;UID=root;PWD=123456;DATABASE=glpkdb'
  'SELECT idSlot'
  'FROM slots' :
   S <- [ idSlot ];

table l_C IN "iODBC"
  'DSN=glpkdb;UID=root;PWD=123456;DATABASE=glpkdb'
  'SELECT idClass, Credit AS CREDIT, Demand AS DEMAND'
  'FROM classes' :
   C <- [ idClass ], Credits ~ CREDIT, Demand_C ~ DEMAND;


table l_R IN "iODBC"
  'DSN=glpkdb;UID=root;PWD=123456;DATABASE=glpkdb'
  'SELECT idRoom, Capacity AS CAPACITY'
  'FROM rooms' :
   R <- [ idRoom ], Capacity_R ~ CAPACITY;

table l_LC IN "iODBC"
  'DSN=glpkdb;UID=root;PWD=123456;DATABASE=glpkdb'
  'SELECT idLecturer, idClass, value'
  'FROM lecturer_classes' :
   LC <- [idLecturer, idClass], Teachability_LC ~ value;

table l_LS IN "iODBC"
  'DSN=glpkdb;UID=root;PWD=123456;DATABASE=glpkdb'
  'SELECT idLecturer, idSlot, value'
  'FROM lecturer_slots' :
   LS <- [idLecturer, idSlot], Availability ~ value;

table l_RC IN "iODBC"
  'DSN=glpkdb;UID=root;PWD=123456;DATABASE=glpkdb'
  'SELECT idRoom, idClass, value'
  'FROM room_classes' :
   RC <- [idRoom, idClass], Teachability_RC ~ value;
/*
param Teachability_LC : Network      Calculus    Programming :=
                  John     1             0             1
                  David    1             1             0
                  Robert   0             1             1  ;
*/


# Variables

var x{l in L, r in R, c in C, s in S} binary;

# Objective Function

# maximize TotalWorkload: sum{r in R,c in C, s in S} x[l,r,c,s];

# Constraints

s.t. constrain_Single_S{s in S, r in R} : sum{l in L, c in C} x[l,r,c,s] <= 1;

s.t. constrain_Credits{c in C} : sum{l in L, r in R, s in S} x[l,r,c,s] = Credits[c];

s.t. constrain_Teachability_LC{l in L, c in C, s in S} : sum{r in R} x[l,r,c,s] <= Teachability_LC[l, c] * Availability[l, s] ;

s.t. constrain_Teachability_RC{l in L, r in R, c in C, s in S} : x[l,r,c,s] <= Teachability_RC[r,c];

# s.t. constrain_Supply{r in R, c in C} : sum {l in L, s in S} x[l,r,c,s] * Demand_C[c] <= Capacity_R[r];

solve; 

table result{l in L, r in R, c in C, s in S: x[l,r,c,s]} OUT "iODBC"
  'DSN=glpkdb;UID=root;PWD=123456;DATABASE=glpkdb'
  'DELETE FROM results;'
  'INSERT INTO results (idLecturer, idRoom, idClass, idSlot, value) VALUES (?,?,?,?,?)' :
  l ~ idLecturer, r ~ idRoom, c ~ idClass, s ~ idSlot, x[l,r,c,s] ~ value;

data;


/*

param Availability : s1   s2  s3 :=
            John      0   1   1
            David     1   1   1
            Robert    1   1   1 ;

param Teachability_RC : Network      Calculus    Programming :=
                  R001      1         0           1
                  R002      1         1           0
                  R003      1         1           1  ;
*/

end;
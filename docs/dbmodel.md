# Database model

## Tables

### Institution

- name: string
- description: text
- image: string

### Days

- number: number [PK]
- name: string
- number_of_days: (sum)

### Periods

- number: number [PK]
- name: text
- start_time: datetime
- end_time: datetime
- number_of_periods: (sum)

### Subjects

- name: string [PK]
- description: text

### Teachers

- teacher_id: auto [PK]
- name: string
- email: string
- password: string
- image: string
- targetHours: number
- bio: text

### Classes

- name: string [PK]
- number_of_students: (sum)

### Rooms

- name: string [PK]
- seats: number

### SubjectsPerClasses [Subjects <-> Classes]

- id: auto [PK]
- subject_name: text [FK - Subjects]
- class_name: number [FK - Classes]

### Students

- id: auto [PK]
- name: string
- age: number
- class_number: number
- class_name: string [FK - Classes]

### QualifiedTeachers [Subjects <-> Teachers]

- id: auto [PK]
- subject_name: string [FK - Subjects]
- teacher_id: number [FK - Teachers]

### Schedule

- id: auto [PK]
- day_name: string [FK - Days]
- period_number: number [FK - Periods]
- subject_name: text [FK - Subjects]
- teacher_id: number [FK - Teachers]
- room_name: text [FK - Rooms]

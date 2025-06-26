export interface Resume {
    // Поля, которые отправляем на бэкенд
    job_title: string;
    education: string;
    work_xp: string;
    skills: string;
    
    // Поля, которые получаем с бэкенда
    resume_id?: number;
    user_id?: number;
    is_active?: boolean;
  }
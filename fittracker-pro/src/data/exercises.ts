import { Exercise } from '../types';

export const exercises: Exercise[] = [
  // تمارين الصدر
  {
    id: 'push-up',
    name: 'Push Up',
    nameAr: 'تمرين الضغط',
    description: 'تمرين أساسي لتقوية عضلات الصدر والذراعين والكتفين',
    muscleGroup: 'chest',
    exerciseType: 'strength',
    difficulty: 'beginner',
    equipment: 'bodyweight',
    instructions: [
      'ابدأ في وضع اللوح الخشبي مع يديك على الأرض',
      'أبعد يديك قليلاً عن عرض الكتفين',
      'اخفض جسمك ببطء حتى يلمس صدرك الأرض تقريباً',
      'ادفع جسمك للأعلى حتى تعود إلى الوضع الأولي',
      'كرر التمرين'
    ],
    tips: [
      'حافظ على استقامة جسمك من الرأس إلى القدمين',
      'تنفس بانتظام أثناء التمرين',
      'لا تترك ظهرك يتقوس'
    ],
    safetyNotes: [
      'توقف إذا شعرت بألم في الكتفين أو الرسغين',
      'ابدأ بعدد قليل من التكرارات وزد تدريجياً'
    ]
  },
  {
    id: 'bench-press',
    name: 'Bench Press',
    nameAr: 'الضغط على المقعد',
    description: 'تمرين أساسي لتقوية عضلات الصدر باستخدام الأوزان الحرة',
    muscleGroup: 'chest',
    exerciseType: 'strength',
    difficulty: 'intermediate',
    equipment: 'free_weight',
    instructions: [
      'استلق على المقعد مع قدميك على الأرض',
      'امسك البار بيديك بعرض الكتفين',
      'اخفض البار ببطء إلى صدرك',
      'ادفع البار للأعلى حتى تعود إلى الوضع الأولي',
      'كرر التمرين'
    ],
    tips: [
      'حافظ على استقرار لوح الكتفين على المقعد',
      'تنفس عند رفع البار',
      'لا ترفع الحوض عن المقعد'
    ],
    safetyNotes: [
      'استخدم دائماً مراقب عند رفع أوزان ثقيلة',
      'تأكد من تثبيت البار بشكل صحيح'
    ]
  },
  {
    id: 'dumbbell-fly',
    name: 'Dumbbell Fly',
    nameAr: 'تمرين الفراشة بالدامبل',
    description: 'تمرين لعزل عضلات الصدر باستخدام الدامبل',
    muscleGroup: 'chest',
    exerciseType: 'strength',
    difficulty: 'intermediate',
    equipment: 'free_weight',
    instructions: [
      'استلق على المقعد مع رفع الدامبل فوق صدرك',
      'افتح ذراعيك ببطء إلى الجانبين',
      'أعد الدامبل إلى الوضع الأولي',
      'كرر التمرين'
    ],
    tips: [
      'حافظ على انحناء بسيط في المرفقين',
      'تحكم في الحركة ببطء',
      'ركز على الشعور بالعضلات'
    ],
    safetyNotes: [
      'لا ترفع أوزان ثقيلة جداً',
      'توقف إذا شعرت بألم في الكتفين'
    ]
  },

  // تمارين الظهر
  {
    id: 'pull-up',
    name: 'Pull Up',
    nameAr: 'تمرين السحب',
    description: 'تمرين أساسي لتقوية عضلات الظهر والذراعين',
    muscleGroup: 'back',
    exerciseType: 'strength',
    difficulty: 'intermediate',
    equipment: 'bodyweight',
    instructions: [
      'امسك الشريط بيديك بعرض الكتفين',
      'علق جسمك مع فرد الذراعين',
      'اسحب جسمك للأعلى حتى يلمس ذقنك الشريط',
      'اخفض جسمك ببطء',
      'كرر التمرين'
    ],
    tips: [
      'حافظ على استقامة جسمك',
      'ركز على استخدام عضلات الظهر',
      'تنفس بانتظام'
    ],
    safetyNotes: [
      'تأكد من قوة الشريط',
      'ابدأ بمساعدة إذا كنت مبتدئاً'
    ]
  },
  {
    id: 'barbell-row',
    name: 'Barbell Row',
    nameAr: 'تمرين السحب بالبار',
    description: 'تمرين لتقوية عضلات الظهر العلوية',
    muscleGroup: 'back',
    exerciseType: 'strength',
    difficulty: 'intermediate',
    equipment: 'free_weight',
    instructions: [
      'انحني للأمام مع الحفاظ على استقامة الظهر',
      'امسك البار بيديك',
      'اسحب البار نحو بطنك',
      'اخفض البار ببطء',
      'كرر التمرين'
    ],
    tips: [
      'حافظ على استقامة الظهر',
      'ركز على تقلص عضلات الظهر',
      'لا تستخدم قوة الدفع'
    ],
    safetyNotes: [
      'لا ترفع أوزان ثقيلة جداً',
      'توقف إذا شعرت بألم في الظهر'
    ]
  },

  // تمارين الأرجل
  {
    id: 'squat',
    name: 'Squat',
    nameAr: 'تمرين القرفصاء',
    description: 'تمرين أساسي لتقوية عضلات الأرجل والأرداف',
    muscleGroup: 'legs',
    exerciseType: 'strength',
    difficulty: 'beginner',
    equipment: 'bodyweight',
    instructions: [
      'قف مع مباعدة قدميك بعرض الكتفين',
      'انزل ببطء كما لو كنت تجلس على كرسي',
      'تأكد من أن ركبتيك لا تتجاوز أصابع قدميك',
      'ارفع جسمك للأعلى',
      'كرر التمرين'
    ],
    tips: [
      'حافظ على استقامة الظهر',
      'وزع وزنك على كامل القدمين',
      'تنفس بانتظام'
    ],
    safetyNotes: [
      'لا تنزل أكثر من اللازم',
      'توقف إذا شعرت بألم في الركبتين'
    ]
  },
  {
    id: 'deadlift',
    name: 'Deadlift',
    nameAr: 'تمرين الرفعة المميتة',
    description: 'تمرين شامل لتقوية عضلات الظهر والأرجل',
    muscleGroup: 'legs',
    exerciseType: 'strength',
    difficulty: 'advanced',
    equipment: 'free_weight',
    instructions: [
      'قف خلف البار مع مباعدة قدميك',
      'انحني وامسك البار بيديك',
      'ارفع البار مع الحفاظ على استقامة الظهر',
      'اخفض البار ببطء',
      'كرر التمرين'
    ],
    tips: [
      'حافظ على استقامة الظهر دائماً',
      'ارفع من الأرجل وليس من الظهر',
      'تحكم في الحركة'
    ],
    safetyNotes: [
      'ابدأ بأوزان خفيفة',
      'تعلم التقنية الصحيحة أولاً',
      'استخدم دائماً مراقب'
    ]
  },

  // تمارين الكتفين
  {
    id: 'shoulder-press',
    name: 'Shoulder Press',
    nameAr: 'تمرين الضغط على الكتفين',
    description: 'تمرين لتقوية عضلات الكتفين',
    muscleGroup: 'shoulders',
    exerciseType: 'strength',
    difficulty: 'intermediate',
    equipment: 'free_weight',
    instructions: [
      'اجلس أو قف مع رفع الدامبل إلى مستوى الكتفين',
      'اضغط الدامبل للأعلى',
      'اخفض الدامبل ببطء',
      'كرر التمرين'
    ],
    tips: [
      'حافظ على استقرار الجسم',
      'لا تقوس ظهرك',
      'ركز على استخدام عضلات الكتفين'
    ],
    safetyNotes: [
      'لا ترفع أوزان ثقيلة جداً',
      'توقف إذا شعرت بألم في الكتفين'
    ]
  },

  // تمارين الذراعين
  {
    id: 'bicep-curl',
    name: 'Bicep Curl',
    nameAr: 'تمرين ثني العضلة ذات الرأسين',
    description: 'تمرين لتقوية عضلات الذراع الأمامية',
    muscleGroup: 'arms',
    exerciseType: 'strength',
    difficulty: 'beginner',
    equipment: 'free_weight',
    instructions: [
      'قف مع رفع الدامبل بيديك',
      'اثني مرفقيك لرفع الدامبل',
      'اخفض الدامبل ببطء',
      'كرر التمرين'
    ],
    tips: [
      'حافظ على استقرار المرفقين',
      'لا تستخدم قوة الدفع',
      'ركز على الشعور بالعضلات'
    ],
    safetyNotes: [
      'لا ترفع أوزان ثقيلة جداً',
      'توقف إذا شعرت بألم في المرفقين'
    ]
  },

  // تمارين الجذع
  {
    id: 'plank',
    name: 'Plank',
    nameAr: 'تمرين اللوح الخشبي',
    description: 'تمرين لتقوية عضلات الجذع والاستقرار',
    muscleGroup: 'core',
    exerciseType: 'strength',
    difficulty: 'beginner',
    equipment: 'bodyweight',
    instructions: [
      'ابدأ في وضع اللوح الخشبي',
      'حافظ على استقامة جسمك',
      'شد عضلات البطن',
      'حافظ على الوضع لمدة 30-60 ثانية'
    ],
    tips: [
      'لا ترفع أو تخفض الحوض',
      'تنفس بانتظام',
      'ركز على شد عضلات البطن'
    ],
    safetyNotes: [
      'توقف إذا شعرت بألم في الظهر',
      'ابدأ بفترات قصيرة'
    ]
  },

  // تمارين الكارديو
  {
    id: 'running',
    name: 'Running',
    nameAr: 'الجري',
    description: 'تمرين كارديو ممتاز لتحسين اللياقة القلبية',
    muscleGroup: 'full_body',
    exerciseType: 'cardio',
    difficulty: 'beginner',
    equipment: 'none',
    instructions: [
      'ابدأ بوتيرة بطيئة',
      'حافظ على وضعية صحيحة',
      'زدد السرعة تدريجياً',
      'استمر لمدة 20-30 دقيقة'
    ],
    tips: [
      'ارتدِ أحذية مناسبة',
      'اشرب الماء بانتظام',
      'استمع لجسمك'
    ],
    safetyNotes: [
      'ابدأ بمسافات قصيرة',
      'توقف إذا شعرت بألم',
      'تجنب الجري في الطقس الحار جداً'
    ]
  },

  // تمارين المرونة
  {
    id: 'stretching',
    name: 'Stretching',
    nameAr: 'تمارين الإطالة',
    description: 'تمارين لتحسين المرونة وتقليل التوتر العضلي',
    muscleGroup: 'full_body',
    exerciseType: 'flexibility',
    difficulty: 'beginner',
    equipment: 'none',
    instructions: [
      'ابدأ بتمارين إطالة خفيفة',
      'حافظ على كل وضع لمدة 15-30 ثانية',
      'تنفس ببطء وعمق',
      'لا تدفع نفسك أكثر من اللازم'
    ],
    tips: [
      'قم بالإحماء قبل الإطالة',
      'ركز على الشعور بالتمدد',
      'كن صبوراً مع تقدمك'
    ],
    safetyNotes: [
      'لا تدفع نفسك للألم',
      'توقف إذا شعرت بألم حاد',
      'تجنب الإطالة المفرطة'
    ]
  }
];

// دالة للحصول على التمارين حسب المجموعة العضلية
export const getExercisesByMuscleGroup = (muscleGroup: string): Exercise[] => {
  return exercises.filter(exercise => exercise.muscleGroup === muscleGroup);
};

// دالة للحصول على التمارين حسب مستوى الصعوبة
export const getExercisesByDifficulty = (difficulty: string): Exercise[] => {
  return exercises.filter(exercise => exercise.difficulty === difficulty);
};

// دالة للحصول على التمارين حسب نوع المعدات
export const getExercisesByEquipment = (equipment: string): Exercise[] => {
  return exercises.filter(exercise => exercise.equipment === equipment);
};

// دالة للبحث في التمارين
export const searchExercises = (query: string): Exercise[] => {
  const lowerQuery = query.toLowerCase();
  return exercises.filter(exercise => 
    exercise.name.toLowerCase().includes(lowerQuery) ||
    exercise.nameAr.includes(lowerQuery) ||
    exercise.description.toLowerCase().includes(lowerQuery)
  );
};
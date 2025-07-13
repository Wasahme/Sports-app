import { Exercise, MuscleGroup, ExerciseCategory, Equipment, DifficultyLevel } from '../types';

export const EXERCISES: Exercise[] = [
  // CHEST EXERCISES
  {
    id: 'chest-001',
    name: 'Push-up',
    nameAr: 'تمرين الضغط',
    description: 'Classic bodyweight exercise for chest, shoulders, and triceps',
    descriptionAr: 'تمرين كلاسيكي لوزن الجسم للصدر والأكتاف والترايسبس',
    instructions: [
      'Start in a plank position with hands shoulder-width apart',
      'Lower your body until chest nearly touches the floor',
      'Push back up to starting position',
      'Keep core tight throughout the movement'
    ],
    instructionsAr: [
      'ابدأ في وضع البلانك مع اليدين على عرض الكتفين',
      'اخفض جسمك حتى يلامس الصدر الأرض تقريباً',
      'ادفع عائداً إلى الوضع الابتدائي',
      'حافظ على شد عضلات البطن خلال الحركة'
    ],
    muscleGroups: [MuscleGroup.CHEST, MuscleGroup.SHOULDERS, MuscleGroup.TRICEPS],
    category: ExerciseCategory.STRENGTH,
    equipment: [Equipment.BODYWEIGHT],
    difficulty: DifficultyLevel.BEGINNER,
    tips: ['Keep body straight', 'Control the movement', 'Breathe out on push up'],
    tipsAr: ['حافظ على استقامة الجسم', 'تحكم في الحركة', 'اخرج الهواء عند الضغط'],
    commonMistakes: ['Sagging hips', 'Partial range of motion', 'Flaring elbows too wide'],
    commonMistakesAr: ['ترهل الوركين', 'نطاق حركة جزئي', 'توسيع المرفقين بشكل مفرط'],
    primaryMuscles: ['Pectoralis major', 'Anterior deltoid', 'Triceps brachii'],
    secondaryMuscles: ['Core', 'Serratus anterior'],
    mechanics: 'compound',
    force: 'push',
    isBodyweight: true,
    estimatedCaloriesPerRep: 0.5
  },
  {
    id: 'chest-002',
    name: 'Bench Press',
    nameAr: 'تمرين البنش برس',
    description: 'Fundamental barbell exercise for chest development',
    descriptionAr: 'تمرين أساسي بالبار لتطوير عضلات الصدر',
    instructions: [
      'Lie on bench with eyes under the bar',
      'Grip bar with hands wider than shoulder-width',
      'Lower bar to chest with control',
      'Press bar back up to starting position'
    ],
    instructionsAr: [
      'استلق على المقعد مع العينين تحت البار',
      'امسك البار باليدين أعرض من عرض الكتفين',
      'اخفض البار إلى الصدر بتحكم',
      'اضغط البار عائداً إلى الوضع الابتدائي'
    ],
    muscleGroups: [MuscleGroup.CHEST, MuscleGroup.SHOULDERS, MuscleGroup.TRICEPS],
    category: ExerciseCategory.STRENGTH,
    equipment: [Equipment.BARBELL],
    difficulty: DifficultyLevel.INTERMEDIATE,
    tips: ['Keep shoulder blades retracted', 'Maintain arch in back', 'Control the descent'],
    tipsAr: ['حافظ على شد لوحي الكتف', 'احتفظ بتقوس الظهر', 'تحكم في النزول'],
    commonMistakes: ['Bouncing bar off chest', 'Uneven grip', 'Lifting feet off ground'],
    commonMistakesAr: ['ارتداد البار من الصدر', 'قبضة غير متوازنة', 'رفع القدمين من الأرض'],
    primaryMuscles: ['Pectoralis major', 'Anterior deltoid', 'Triceps brachii'],
    secondaryMuscles: ['Serratus anterior', 'Core'],
    mechanics: 'compound',
    force: 'push',
    isBodyweight: false,
    estimatedCaloriesPerRep: 2
  },
  {
    id: 'chest-003',
    name: 'Dumbbell Flyes',
    nameAr: 'تمرين الفلايز بالدمبلز',
    description: 'Isolation exercise for chest muscles',
    descriptionAr: 'تمرين عزل لعضلات الصدر',
    instructions: [
      'Lie on bench holding dumbbells above chest',
      'Lower weights in wide arc until stretch is felt',
      'Reverse motion to return to start',
      'Keep slight bend in elbows throughout'
    ],
    instructionsAr: [
      'استلق على المقعد ممسكاً بالدمبلز فوق الصدر',
      'اخفض الأوزان في قوس واسع حتى تشعر بالتمدد',
      'اعكس الحركة للعودة إلى البداية',
      'احتفظ بانحناء خفيف في المرفقين'
    ],
    muscleGroups: [MuscleGroup.CHEST],
    category: ExerciseCategory.STRENGTH,
    equipment: [Equipment.DUMBBELL],
    difficulty: DifficultyLevel.INTERMEDIATE,
    tips: ['Focus on chest stretch', 'Control the weight', 'Dont go too heavy'],
    tipsAr: ['ركز على تمدد الصدر', 'تحكم في الوزن', 'لا تستخدم وزناً ثقيلاً جداً'],
    commonMistakes: ['Going too low', 'Using too much weight', 'Bending elbows too much'],
    commonMistakesAr: ['النزول بشكل مفرط', 'استخدام وزن مفرط', 'ثني المرفقين بشكل مفرط'],
    primaryMuscles: ['Pectoralis major'],
    secondaryMuscles: ['Anterior deltoid'],
    mechanics: 'isolation',
    force: 'push',
    isBodyweight: false,
    estimatedCaloriesPerRep: 1.5
  },

  // BACK EXERCISES
  {
    id: 'back-001',
    name: 'Pull-up',
    nameAr: 'تمرين العقلة',
    description: 'Bodyweight exercise for back and biceps',
    descriptionAr: 'تمرين وزن الجسم للظهر والبايسبس',
    instructions: [
      'Hang from bar with overhand grip',
      'Pull body up until chin clears bar',
      'Lower with control to full arm extension',
      'Maintain tight core throughout'
    ],
    instructionsAr: [
      'تعلق من البار بقبضة علوية',
      'اسحب جسمك لأعلى حتى يتجاوز الذقن البار',
      'انزل بتحكم حتى امتداد الذراعين بالكامل',
      'حافظ على شد عضلات البطن'
    ],
    muscleGroups: [MuscleGroup.BACK, MuscleGroup.BICEPS],
    category: ExerciseCategory.STRENGTH,
    equipment: [Equipment.BODYWEIGHT],
    difficulty: DifficultyLevel.ADVANCED,
    tips: ['Engage lats first', 'Pull with back not arms', 'Full range of motion'],
    tipsAr: ['فعل عضلات الظهر أولاً', 'اسحب بالظهر وليس الذراعين', 'نطاق حركة كامل'],
    commonMistakes: ['Kipping or swinging', 'Partial range of motion', 'Leaning too far back'],
    commonMistakesAr: ['التأرجح أو التذبذب', 'نطاق حركة جزئي', 'الميل للخلف بشكل مفرط'],
    primaryMuscles: ['Latissimus dorsi', 'Rhomboids', 'Middle trapezius'],
    secondaryMuscles: ['Biceps brachii', 'Rear deltoid', 'Core'],
    mechanics: 'compound',
    force: 'pull',
    isBodyweight: true,
    estimatedCaloriesPerRep: 2
  },
  {
    id: 'back-002',
    name: 'Bent-over Row',
    nameAr: 'تمرين السحب المنحني',
    description: 'Barbell exercise for back thickness',
    descriptionAr: 'تمرين البار لكثافة الظهر',
    instructions: [
      'Bend over with barbell in hands',
      'Keep back straight and chest up',
      'Pull bar to lower chest/upper abdomen',
      'Lower with control and repeat'
    ],
    instructionsAr: [
      'انحن والبار في يديك',
      'حافظ على استقامة الظهر وارفع الصدر',
      'اسحب البار إلى أسفل الصدر/أعلى البطن',
      'انزل بتحكم وكرر'
    ],
    muscleGroups: [MuscleGroup.BACK, MuscleGroup.BICEPS],
    category: ExerciseCategory.STRENGTH,
    equipment: [Equipment.BARBELL],
    difficulty: DifficultyLevel.INTERMEDIATE,
    tips: ['Keep core tight', 'Pull to sternum', 'Squeeze shoulder blades'],
    tipsAr: ['حافظ على شد البطن', 'اسحب إلى عظمة القص', 'اضغط لوحي الكتف'],
    commonMistakes: ['Rounding back', 'Using too much weight', 'Not pulling to chest'],
    commonMistakesAr: ['تقوس الظهر', 'استخدام وزن مفرط', 'عدم السحب للصدر'],
    primaryMuscles: ['Latissimus dorsi', 'Rhomboids', 'Middle trapezius'],
    secondaryMuscles: ['Biceps brachii', 'Rear deltoid', 'Core'],
    mechanics: 'compound',
    force: 'pull',
    isBodyweight: false,
    estimatedCaloriesPerRep: 2.5
  },
  {
    id: 'back-003',
    name: 'Lat Pulldown',
    nameAr: 'تمرين اللات بولداون',
    description: 'Machine exercise for lat development',
    descriptionAr: 'تمرين الآلة لتطوير عضلات اللات',
    instructions: [
      'Sit at lat pulldown machine',
      'Grab bar with wide overhand grip',
      'Pull bar down to upper chest',
      'Slowly return to starting position'
    ],
    instructionsAr: [
      'اجلس على آلة اللات بولداون',
      'امسك البار بقبضة علوية واسعة',
      'اسحب البار لأسفل إلى أعلى الصدر',
      'ارجع ببطء إلى الوضع الابتدائي'
    ],
    muscleGroups: [MuscleGroup.BACK, MuscleGroup.BICEPS],
    category: ExerciseCategory.STRENGTH,
    equipment: [Equipment.MACHINE],
    difficulty: DifficultyLevel.BEGINNER,
    tips: ['Lean back slightly', 'Focus on lat engagement', 'Control the negative'],
    tipsAr: ['امل للخلف قليلاً', 'ركز على تفعيل اللات', 'تحكم في الحركة السلبية'],
    commonMistakes: ['Pulling behind neck', 'Using momentum', 'Leaning too far back'],
    commonMistakesAr: ['السحب خلف الرقبة', 'استخدام الزخم', 'الميل للخلف بشكل مفرط'],
    primaryMuscles: ['Latissimus dorsi', 'Rhomboids'],
    secondaryMuscles: ['Biceps brachii', 'Middle trapezius', 'Rear deltoid'],
    mechanics: 'compound',
    force: 'pull',
    isBodyweight: false,
    estimatedCaloriesPerRep: 2
  },

  // SHOULDER EXERCISES
  {
    id: 'shoulder-001',
    name: 'Shoulder Press',
    nameAr: 'تمرين ضغط الكتف',
    description: 'Overhead pressing exercise for shoulder development',
    descriptionAr: 'تمرين الضغط العلوي لتطوير الكتف',
    instructions: [
      'Hold dumbbells at shoulder height',
      'Press weights overhead until arms are extended',
      'Lower with control to starting position',
      'Keep core engaged throughout'
    ],
    instructionsAr: [
      'امسك الدمبلز على مستوى الكتف',
      'اضغط الأوزان لأعلى حتى تمتد الذراعان',
      'انزل بتحكم إلى الوضع الابتدائي',
      'حافظ على شد عضلات البطن'
    ],
    muscleGroups: [MuscleGroup.SHOULDERS, MuscleGroup.TRICEPS],
    category: ExerciseCategory.STRENGTH,
    equipment: [Equipment.DUMBBELL],
    difficulty: DifficultyLevel.INTERMEDIATE,
    tips: ['Keep core tight', 'Press straight up', 'Full range of motion'],
    tipsAr: ['حافظ على شد البطن', 'اضغط مباشرة لأعلى', 'نطاق حركة كامل'],
    commonMistakes: ['Arching back excessively', 'Pressing forward', 'Using too much weight'],
    commonMistakesAr: ['تقوس الظهر بشكل مفرط', 'الضغط للأمام', 'استخدام وزن مفرط'],
    primaryMuscles: ['Anterior deltoid', 'Medial deltoid', 'Posterior deltoid'],
    secondaryMuscles: ['Triceps brachii', 'Upper trapezius', 'Core'],
    mechanics: 'compound',
    force: 'push',
    isBodyweight: false,
    estimatedCaloriesPerRep: 2
  },
  {
    id: 'shoulder-002',
    name: 'Lateral Raises',
    nameAr: 'تمرين الرفع الجانبي',
    description: 'Isolation exercise for medial deltoids',
    descriptionAr: 'تمرين عزل للدالية الوسطى',
    instructions: [
      'Hold dumbbells at sides with slight bend in elbow',
      'Raise arms out to sides until parallel to floor',
      'Lower with control to starting position',
      'Keep torso stable throughout'
    ],
    instructionsAr: [
      'امسك الدمبلز على الجانبين مع انحناء خفيف في المرفق',
      'ارفع الذراعين للجانبين حتى يصبحا موازيين للأرض',
      'انزل بتحكم إلى الوضع الابتدائي',
      'حافظ على ثبات الجذع'
    ],
    muscleGroups: [MuscleGroup.SHOULDERS],
    category: ExerciseCategory.STRENGTH,
    equipment: [Equipment.DUMBBELL],
    difficulty: DifficultyLevel.BEGINNER,
    tips: ['Lead with pinkies', 'Control the movement', 'Keep shoulders down'],
    tipsAr: ['قد بالخنصر', 'تحكم في الحركة', 'حافظ على انخفاض الكتفين'],
    commonMistakes: ['Using too much weight', 'Swinging the weights', 'Raising too high'],
    commonMistakesAr: ['استخدام وزن مفرط', 'تأرجح الأوزان', 'الرفع بشكل مفرط'],
    primaryMuscles: ['Medial deltoid'],
    secondaryMuscles: ['Anterior deltoid', 'Posterior deltoid'],
    mechanics: 'isolation',
    force: 'push',
    isBodyweight: false,
    estimatedCaloriesPerRep: 1
  },

  // LEG EXERCISES
  {
    id: 'leg-001',
    name: 'Squat',
    nameAr: 'تمرين القرفصاء',
    description: 'Fundamental compound exercise for legs and glutes',
    descriptionAr: 'تمرين مركب أساسي للساقين والمؤخرة',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Lower body by bending knees and hips',
      'Descend until thighs are parallel to floor',
      'Push through heels to return to start'
    ],
    instructionsAr: [
      'قف مع القدمين على عرض الكتفين',
      'اخفض الجسم بثني الركبتين والوركين',
      'انزل حتى تصبح الفخذان موازيين للأرض',
      'ادفع من خلال الكعبين للعودة للبداية'
    ],
    muscleGroups: [MuscleGroup.QUADRICEPS, MuscleGroup.GLUTES, MuscleGroup.HAMSTRINGS],
    category: ExerciseCategory.STRENGTH,
    equipment: [Equipment.BODYWEIGHT],
    difficulty: DifficultyLevel.BEGINNER,
    tips: ['Keep chest up', 'Track knees over toes', 'Engage core'],
    tipsAr: ['حافظ على رفع الصدر', 'اجعل الركبتين تتبع أصابع القدم', 'فعل عضلات البطن'],
    commonMistakes: ['Knees caving in', 'Leaning forward', 'Not going deep enough'],
    commonMistakesAr: ['انهيار الركبتين للداخل', 'الميل للأمام', 'عدم النزول بعمق كافٍ'],
    primaryMuscles: ['Quadriceps', 'Glutes'],
    secondaryMuscles: ['Hamstrings', 'Calves', 'Core'],
    mechanics: 'compound',
    force: 'push',
    isBodyweight: true,
    estimatedCaloriesPerRep: 2
  },
  {
    id: 'leg-002',
    name: 'Deadlift',
    nameAr: 'تمرين الرفعة الميتة',
    description: 'King of all exercises - works entire posterior chain',
    descriptionAr: 'ملك كل التمارين - يعمل على السلسلة الخلفية بأكملها',
    instructions: [
      'Stand with bar over mid-foot',
      'Bend at hips and knees to grip bar',
      'Drive through heels to lift bar',
      'Stand tall with shoulders back'
    ],
    instructionsAr: [
      'قف مع البار فوق منتصف القدم',
      'انحن عند الوركين والركبتين لمسك البار',
      'ادفع من خلال الكعبين لرفع البار',
      'قف بشكل مستقيم مع الكتفين للخلف'
    ],
    muscleGroups: [MuscleGroup.HAMSTRINGS, MuscleGroup.GLUTES, MuscleGroup.BACK],
    category: ExerciseCategory.STRENGTH,
    equipment: [Equipment.BARBELL],
    difficulty: DifficultyLevel.ADVANCED,
    tips: ['Keep bar close to body', 'Drive hips forward', 'Maintain neutral spine'],
    tipsAr: ['حافظ على البار قريباً من الجسم', 'ادفع الوركين للأمام', 'حافظ على حياد العمود الفقري'],
    commonMistakes: ['Rounding back', 'Bar drifting away', 'Hyperextending at top'],
    commonMistakesAr: ['تقوس الظهر', 'ابتعاد البار', 'الإفراط في التمدد في الأعلى'],
    primaryMuscles: ['Hamstrings', 'Glutes', 'Erector spinae'],
    secondaryMuscles: ['Quadriceps', 'Latissimus dorsi', 'Trapezius'],
    mechanics: 'compound',
    force: 'pull',
    isBodyweight: false,
    estimatedCaloriesPerRep: 3
  },
  {
    id: 'leg-003',
    name: 'Lunges',
    nameAr: 'تمرين الاندفاع',
    description: 'Unilateral leg exercise for balance and strength',
    descriptionAr: 'تمرين أحادي الساق للتوازن والقوة',
    instructions: [
      'Step forward with one leg',
      'Lower hips until both knees are at 90 degrees',
      'Push back to starting position',
      'Alternate legs or complete set on one side'
    ],
    instructionsAr: [
      'خطو للأمام بساق واحدة',
      'اخفض الوركين حتى تصبح الركبتان بزاوية 90 درجة',
      'ادفع عائداً إلى الوضع الابتدائي',
      'تناوب الساقين أو أكمل المجموعة على جانب واحد'
    ],
    muscleGroups: [MuscleGroup.QUADRICEPS, MuscleGroup.GLUTES, MuscleGroup.HAMSTRINGS],
    category: ExerciseCategory.STRENGTH,
    equipment: [Equipment.BODYWEIGHT],
    difficulty: DifficultyLevel.BEGINNER,
    tips: ['Keep front knee over ankle', 'Drop straight down', 'Maintain upright torso'],
    tipsAr: ['حافظ على الركبة الأمامية فوق الكاحل', 'انزل مباشرة لأسفل', 'احتفظ بالجذع مستقيماً'],
    commonMistakes: ['Knee extending past toes', 'Leaning forward', 'Too small steps'],
    commonMistakesAr: ['امتداد الركبة متجاوزة أصابع القدم', 'الميل للأمام', 'خطوات صغيرة جداً'],
    primaryMuscles: ['Quadriceps', 'Glutes'],
    secondaryMuscles: ['Hamstrings', 'Calves', 'Core'],
    mechanics: 'compound',
    force: 'push',
    isBodyweight: true,
    estimatedCaloriesPerRep: 1.5
  },

  // ARM EXERCISES
  {
    id: 'arm-001',
    name: 'Bicep Curls',
    nameAr: 'تمرين عضلة الذراع',
    description: 'Isolation exercise for bicep development',
    descriptionAr: 'تمرين عزل لتطوير البايسبس',
    instructions: [
      'Hold dumbbells at sides with arms extended',
      'Curl weights up by contracting biceps',
      'Squeeze at the top',
      'Lower with control to starting position'
    ],
    instructionsAr: [
      'امسك الدمبلز على الجانبين مع امتداد الذراعين',
      'ارفع الأوزان بانقباض البايسبس',
      'اضغط في الأعلى',
      'انزل بتحكم إلى الوضع الابتدائي'
    ],
    muscleGroups: [MuscleGroup.BICEPS],
    category: ExerciseCategory.STRENGTH,
    equipment: [Equipment.DUMBBELL],
    difficulty: DifficultyLevel.BEGINNER,
    tips: ['Keep elbows stationary', 'Full range of motion', 'Control the negative'],
    tipsAr: ['حافظ على ثبات المرفقين', 'نطاق حركة كامل', 'تحكم في الحركة السلبية'],
    commonMistakes: ['Swinging the weights', 'Using momentum', 'Partial range of motion'],
    commonMistakesAr: ['تأرجح الأوزان', 'استخدام الزخم', 'نطاق حركة جزئي'],
    primaryMuscles: ['Biceps brachii'],
    secondaryMuscles: ['Brachialis', 'Brachioradialis'],
    mechanics: 'isolation',
    force: 'pull',
    isBodyweight: false,
    estimatedCaloriesPerRep: 1
  },
  {
    id: 'arm-002',
    name: 'Tricep Dips',
    nameAr: 'تمرين الترايسبس',
    description: 'Bodyweight exercise for tricep development',
    descriptionAr: 'تمرين وزن الجسم لتطوير الترايسبس',
    instructions: [
      'Sit on edge of bench with hands gripping edge',
      'Slide forward and lower body by bending elbows',
      'Push back up to starting position',
      'Keep elbows close to body'
    ],
    instructionsAr: [
      'اجلس على حافة المقعد مع مسك الحافة باليدين',
      'انزلق للأمام واخفض الجسم بثني المرفقين',
      'ادفع عائداً إلى الوضع الابتدائي',
      'حافظ على قرب المرفقين من الجسم'
    ],
    muscleGroups: [MuscleGroup.TRICEPS],
    category: ExerciseCategory.STRENGTH,
    equipment: [Equipment.BODYWEIGHT],
    difficulty: DifficultyLevel.INTERMEDIATE,
    tips: ['Keep elbows close', 'Lower until 90 degrees', 'Engage core'],
    tipsAr: ['حافظ على قرب المرفقين', 'انزل حتى 90 درجة', 'فعل عضلات البطن'],
    commonMistakes: ['Flaring elbows out', 'Going too low', 'Using shoulders too much'],
    commonMistakesAr: ['توسيع المرفقين', 'النزول بشكل مفرط', 'استخدام الكتفين بشكل مفرط'],
    primaryMuscles: ['Triceps brachii'],
    secondaryMuscles: ['Anterior deltoid', 'Pectoralis major'],
    mechanics: 'compound',
    force: 'push',
    isBodyweight: true,
    estimatedCaloriesPerRep: 1.5
  },

  // CORE EXERCISES
  {
    id: 'core-001',
    name: 'Plank',
    nameAr: 'تمرين البلانك',
    description: 'Isometric core strengthening exercise',
    descriptionAr: 'تمرين إيزومتري لتقوية عضلات البطن',
    instructions: [
      'Start in push-up position',
      'Lower onto forearms',
      'Hold position with body straight',
      'Keep core engaged throughout'
    ],
    instructionsAr: [
      'ابدأ في وضع تمرين الضغط',
      'انزل على الساعدين',
      'احتفظ بالوضع مع استقامة الجسم',
      'حافظ على شد عضلات البطن'
    ],
    muscleGroups: [MuscleGroup.CORE],
    category: ExerciseCategory.STRENGTH,
    equipment: [Equipment.BODYWEIGHT],
    difficulty: DifficultyLevel.BEGINNER,
    tips: ['Keep body straight', 'Breathe normally', 'Engage glutes'],
    tipsAr: ['حافظ على استقامة الجسم', 'تنفس بشكل طبيعي', 'فعل عضلات المؤخرة'],
    commonMistakes: ['Sagging hips', 'Holding breath', 'Raising hips too high'],
    commonMistakesAr: ['ترهل الوركين', 'حبس الأنفاس', 'رفع الوركين بشكل مفرط'],
    primaryMuscles: ['Rectus abdominis', 'Transverse abdominis'],
    secondaryMuscles: ['Internal obliques', 'External obliques', 'Erector spinae'],
    mechanics: 'isolation',
    force: 'static',
    isBodyweight: true,
    estimatedCaloriesPerRep: 0.5
  },
  {
    id: 'core-002',
    name: 'Crunches',
    nameAr: 'تمرين البطن',
    description: 'Classic abdominal exercise',
    descriptionAr: 'تمرين كلاسيكي لعضلات البطن',
    instructions: [
      'Lie on back with knees bent',
      'Place hands behind head',
      'Lift shoulders off ground by contracting abs',
      'Lower with control to starting position'
    ],
    instructionsAr: [
      'استلق على الظهر مع ثني الركبتين',
      'ضع اليدين خلف الرأس',
      'ارفع الكتفين عن الأرض بانقباض البطن',
      'انزل بتحكم إلى الوضع الابتدائي'
    ],
    muscleGroups: [MuscleGroup.CORE],
    category: ExerciseCategory.STRENGTH,
    equipment: [Equipment.BODYWEIGHT],
    difficulty: DifficultyLevel.BEGINNER,
    tips: ['Focus on abs', 'Dont pull on neck', 'Exhale on crunch'],
    tipsAr: ['ركز على البطن', 'لا تسحب الرقبة', 'اخرج الهواء عند الضغط'],
    commonMistakes: ['Pulling on neck', 'Using momentum', 'Not engaging core'],
    commonMistakesAr: ['سحب الرقبة', 'استخدام الزخم', 'عدم تفعيل عضلات البطن'],
    primaryMuscles: ['Rectus abdominis'],
    secondaryMuscles: ['Internal obliques', 'External obliques'],
    mechanics: 'isolation',
    force: 'pull',
    isBodyweight: true,
    estimatedCaloriesPerRep: 0.3
  },

  // CARDIO EXERCISES
  {
    id: 'cardio-001',
    name: 'Jumping Jacks',
    nameAr: 'تمرين الوثب مع فتح الذراعين',
    description: 'Full-body cardio exercise',
    descriptionAr: 'تمرين كارديو للجسم كاملاً',
    instructions: [
      'Start with feet together, arms at sides',
      'Jump while spreading legs and raising arms overhead',
      'Jump back to starting position',
      'Continue in rhythm'
    ],
    instructionsAr: [
      'ابدأ مع القدمين معاً والذراعين على الجانبين',
      'اقفز مع فتح الساقين ورفع الذراعين فوق الرأس',
      'اقفز عائداً إلى الوضع الابتدائي',
      'استمر بإيقاع منتظم'
    ],
    muscleGroups: [MuscleGroup.CARDIO],
    category: ExerciseCategory.CARDIO,
    equipment: [Equipment.BODYWEIGHT],
    difficulty: DifficultyLevel.BEGINNER,
    tips: ['Land softly', 'Keep core engaged', 'Maintain rhythm'],
    tipsAr: ['اهبط بنعومة', 'حافظ على شد البطن', 'احتفظ بالإيقاع'],
    commonMistakes: ['Landing too hard', 'Poor coordination', 'Going too fast'],
    commonMistakesAr: ['الهبوط بقوة', 'ضعف التناسق', 'السرعة المفرطة'],
    primaryMuscles: ['Full body'],
    secondaryMuscles: ['Cardiovascular system'],
    mechanics: 'compound',
    force: 'push',
    isBodyweight: true,
    estimatedCaloriesPerRep: 0.8
  },
  {
    id: 'cardio-002',
    name: 'Burpees',
    nameAr: 'تمرين البيربي',
    description: 'High-intensity full-body exercise',
    descriptionAr: 'تمرين عالي الكثافة للجسم كاملاً',
    instructions: [
      'Start standing, then squat down',
      'Place hands on ground and jump feet back',
      'Perform push-up, then jump feet forward',
      'Jump up with arms overhead'
    ],
    instructionsAr: [
      'ابدأ واقفاً، ثم اقرفص',
      'ضع اليدين على الأرض واقفز بالقدمين للخلف',
      'نفذ تمرين ضغط، ثم اقفز بالقدمين للأمام',
      'اقفز لأعلى مع الذراعين فوق الرأس'
    ],
    muscleGroups: [MuscleGroup.CARDIO, MuscleGroup.CHEST, MuscleGroup.CORE],
    category: ExerciseCategory.CARDIO,
    equipment: [Equipment.BODYWEIGHT],
    difficulty: DifficultyLevel.ADVANCED,
    tips: ['Pace yourself', 'Maintain form', 'Land softly'],
    tipsAr: ['تحكم في الإيقاع', 'حافظ على الشكل', 'اهبط بنعومة'],
    commonMistakes: ['Rushing the movement', 'Poor push-up form', 'Landing too hard'],
    commonMistakesAr: ['الاستعجال في الحركة', 'شكل ضعيف في الضغط', 'الهبوط بقوة'],
    primaryMuscles: ['Full body'],
    secondaryMuscles: ['Cardiovascular system'],
    mechanics: 'compound',
    force: 'push',
    isBodyweight: true,
    estimatedCaloriesPerRep: 2.5
  },
  {
    id: 'cardio-003',
    name: 'Mountain Climbers',
    nameAr: 'تمرين متسلق الجبال',
    description: 'Dynamic cardio and core exercise',
    descriptionAr: 'تمرين كارديو وبطن ديناميكي',
    instructions: [
      'Start in plank position',
      'Bring one knee toward chest',
      'Quickly switch legs',
      'Continue alternating at fast pace'
    ],
    instructionsAr: [
      'ابدأ في وضع البلانك',
      'أحضر ركبة واحدة نحو الصدر',
      'بدل الساقين بسرعة',
      'استمر في التناوب بوتيرة سريعة'
    ],
    muscleGroups: [MuscleGroup.CARDIO, MuscleGroup.CORE],
    category: ExerciseCategory.CARDIO,
    equipment: [Equipment.BODYWEIGHT],
    difficulty: DifficultyLevel.INTERMEDIATE,
    tips: ['Keep hips level', 'Maintain plank position', 'Quick foot placement'],
    tipsAr: ['حافظ على مستوى الوركين', 'احتفظ بوضع البلانك', 'وضع القدم بسرعة'],
    commonMistakes: ['Raising hips too high', 'Slow movement', 'Poor plank form'],
    commonMistakesAr: ['رفع الوركين عالياً', 'الحركة البطيئة', 'شكل بلانك ضعيف'],
    primaryMuscles: ['Core', 'Hip flexors'],
    secondaryMuscles: ['Shoulders', 'Cardiovascular system'],
    mechanics: 'compound',
    force: 'push',
    isBodyweight: true,
    estimatedCaloriesPerRep: 1.2
  },

  // FUNCTIONAL EXERCISES
  {
    id: 'functional-001',
    name: 'Turkish Get-Up',
    nameAr: 'تمرين النهوض التركي',
    description: 'Complex full-body functional movement',
    descriptionAr: 'حركة وظيفية معقدة للجسم كاملاً',
    instructions: [
      'Start lying down with kettlebell in one hand',
      'Rise to standing position step by step',
      'Reverse the movement to return to lying',
      'Complete all reps on one side before switching'
    ],
    instructionsAr: [
      'ابدأ مستلقياً مع الكتل بيل في يد واحدة',
      'انهض إلى وضع الوقوف خطوة بخطوة',
      'اعكس الحركة للعودة إلى الاستلقاء',
      'أكمل جميع التكرارات على جانب واحد قبل التبديل'
    ],
    muscleGroups: [MuscleGroup.CORE, MuscleGroup.SHOULDERS, MuscleGroup.QUADRICEPS],
    category: ExerciseCategory.STRENGTH,
    equipment: [Equipment.KETTLEBELL],
    difficulty: DifficultyLevel.ADVANCED,
    tips: ['Move slowly', 'Keep weight overhead', 'Focus on stability'],
    tipsAr: ['تحرك ببطء', 'حافظ على الوزن فوق الرأس', 'ركز على الاستقرار'],
    commonMistakes: ['Moving too fast', 'Poor weight control', 'Skipping steps'],
    commonMistakesAr: ['التحرك بسرعة مفرطة', 'ضعف التحكم في الوزن', 'تخطي الخطوات'],
    primaryMuscles: ['Core', 'Shoulders', 'Legs'],
    secondaryMuscles: ['Full body stabilizers'],
    mechanics: 'compound',
    force: 'static',
    isBodyweight: false,
    estimatedCaloriesPerRep: 3
  },
  {
    id: 'functional-002',
    name: 'Farmers Walk',
    nameAr: 'تمرين مشي المزارع',
    description: 'Functional exercise for grip and core strength',
    descriptionAr: 'تمرين وظيفي لقوة القبضة وعضلات البطن',
    instructions: [
      'Hold heavy weights in both hands',
      'Walk forward with upright posture',
      'Keep core tight and shoulders back',
      'Walk for distance or time'
    ],
    instructionsAr: [
      'امسك أوزان ثقيلة في كلتا اليدين',
      'امش للأمام مع وضعية مستقيمة',
      'حافظ على شد البطن والكتفين للخلف',
      'امش لمسافة أو وقت محدد'
    ],
    muscleGroups: [MuscleGroup.FOREARMS, MuscleGroup.CORE, MuscleGroup.SHOULDERS],
    category: ExerciseCategory.STRENGTH,
    equipment: [Equipment.DUMBBELL],
    difficulty: DifficultyLevel.INTERMEDIATE,
    tips: ['Keep shoulders back', 'Walk tall', 'Engage core'],
    tipsAr: ['حافظ على الكتفين للخلف', 'امش بشكل مستقيم', 'فعل عضلات البطن'],
    commonMistakes: ['Leaning forward', 'Taking too long steps', 'Dropping weights'],
    commonMistakesAr: ['الميل للأمام', 'أخذ خطوات طويلة جداً', 'إسقاط الأوزان'],
    primaryMuscles: ['Forearms', 'Core', 'Trapezius'],
    secondaryMuscles: ['Shoulders', 'Legs', 'Back'],
    mechanics: 'compound',
    force: 'static',
    isBodyweight: false,
    estimatedCaloriesPerRep: 2
  },

  // FLEXIBILITY EXERCISES
  {
    id: 'flexibility-001',
    name: 'Downward Dog',
    nameAr: 'تمرين الكلب المنحني',
    description: 'Yoga pose for flexibility and strength',
    descriptionAr: 'وضعة يوغا للمرونة والقوة',
    instructions: [
      'Start on hands and knees',
      'Lift hips up and back',
      'Straighten legs and arms',
      'Hold position while breathing deeply'
    ],
    instructionsAr: [
      'ابدأ على اليدين والركبتين',
      'ارفع الوركين لأعلى وللخلف',
      'مد الساقين والذراعين',
      'احتفظ بالوضع مع التنفس العميق'
    ],
    muscleGroups: [MuscleGroup.SHOULDERS, MuscleGroup.HAMSTRINGS, MuscleGroup.CALVES],
    category: ExerciseCategory.FLEXIBILITY,
    equipment: [Equipment.BODYWEIGHT],
    difficulty: DifficultyLevel.BEGINNER,
    tips: ['Press through hands', 'Lengthen spine', 'Breathe deeply'],
    tipsAr: ['اضغط من خلال اليدين', 'أطل العمود الفقري', 'تنفس بعمق'],
    commonMistakes: ['Hunching shoulders', 'Bending knees too much', 'Holding breath'],
    commonMistakesAr: ['تقوس الكتفين', 'ثني الركبتين كثيراً', 'حبس الأنفاس'],
    primaryMuscles: ['Shoulders', 'Hamstrings', 'Calves'],
    secondaryMuscles: ['Core', 'Back extensors'],
    mechanics: 'compound',
    force: 'static',
    isBodyweight: true,
    estimatedCaloriesPerRep: 0.5
  },
  {
    id: 'flexibility-002',
    name: 'Pigeon Pose',
    nameAr: 'وضعة الحمامة',
    description: 'Hip flexibility and mobility exercise',
    descriptionAr: 'تمرين مرونة وحركة الورك',
    instructions: [
      'Start in downward dog position',
      'Bring one knee forward toward same-side hand',
      'Lower hips toward ground',
      'Hold stretch and switch sides'
    ],
    instructionsAr: [
      'ابدأ في وضع الكلب المنحني',
      'أحضر ركبة واحدة للأمام نحو اليد المقابلة',
      'اخفض الوركين نحو الأرض',
      'احتفظ بالتمدد وبدل الجانبين'
    ],
    muscleGroups: [MuscleGroup.GLUTES, MuscleGroup.HAMSTRINGS],
    category: ExerciseCategory.FLEXIBILITY,
    equipment: [Equipment.BODYWEIGHT],
    difficulty: DifficultyLevel.INTERMEDIATE,
    tips: ['Relax into stretch', 'Keep hips square', 'Breathe deeply'],
    tipsAr: ['استرخ في التمدد', 'حافظ على الوركين مربعين', 'تنفس بعمق'],
    commonMistakes: ['Forcing the stretch', 'Uneven hips', 'Holding breath'],
    commonMistakesAr: ['إجبار التمدد', 'عدم توازن الوركين', 'حبس الأنفاس'],
    primaryMuscles: ['Hip flexors', 'Glutes'],
    secondaryMuscles: ['IT band', 'Hamstrings'],
    mechanics: 'isolation',
    force: 'static',
    isBodyweight: true,
    estimatedCaloriesPerRep: 0.3
  },

  // OLYMPIC LIFTS
  {
    id: 'olympic-001',
    name: 'Clean and Press',
    nameAr: 'تمرين الكلين والضغط',
    description: 'Olympic lift combining power and strength',
    descriptionAr: 'رفعة أولمبية تجمع بين القوة والقدرة',
    instructions: [
      'Start with barbell on ground',
      'Clean bar to shoulders in one explosive movement',
      'Press bar overhead',
      'Lower bar to shoulders then to ground'
    ],
    instructionsAr: [
      'ابدأ مع البار على الأرض',
      'ارفع البار إلى الكتفين بحركة انفجارية واحدة',
      'اضغط البار فوق الرأس',
      'انزل البار إلى الكتفين ثم إلى الأرض'
    ],
    muscleGroups: [MuscleGroup.SHOULDERS, MuscleGroup.BACK, MuscleGroup.QUADRICEPS],
    category: ExerciseCategory.STRENGTH,
    equipment: [Equipment.BARBELL],
    difficulty: DifficultyLevel.ADVANCED,
    tips: ['Explosive movement', 'Full body coordination', 'Proper timing'],
    tipsAr: ['حركة انفجارية', 'تناسق الجسم كاملاً', 'توقيت صحيح'],
    commonMistakes: ['Poor timing', 'Incomplete hip extension', 'Pressing too early'],
    commonMistakesAr: ['توقيت ضعيف', 'امتداد ورك غير مكتمل', 'الضغط مبكراً'],
    primaryMuscles: ['Shoulders', 'Back', 'Legs'],
    secondaryMuscles: ['Core', 'Arms', 'Traps'],
    mechanics: 'compound',
    force: 'push',
    isBodyweight: false,
    estimatedCaloriesPerRep: 4
  },

  // KETTLEBELL EXERCISES
  {
    id: 'kettlebell-001',
    name: 'Kettlebell Swing',
    nameAr: 'تمرين تأرجح الكتل بيل',
    description: 'Dynamic hip hinge exercise',
    descriptionAr: 'تمرين ديناميكي لمفصل الورك',
    instructions: [
      'Stand with feet wider than shoulder-width',
      'Hold kettlebell with both hands',
      'Hinge at hips and swing kettlebell back',
      'Drive hips forward to swing kettlebell up'
    ],
    instructionsAr: [
      'قف مع القدمين أعرض من عرض الكتفين',
      'امسك الكتل بيل بكلتا اليدين',
      'انحن عند الوركين وأرجح الكتل بيل للخلف',
      'ادفع الوركين للأمام لأرجحة الكتل بيل لأعلى'
    ],
    muscleGroups: [MuscleGroup.GLUTES, MuscleGroup.HAMSTRINGS, MuscleGroup.CORE],
    category: ExerciseCategory.STRENGTH,
    equipment: [Equipment.KETTLEBELL],
    difficulty: DifficultyLevel.INTERMEDIATE,
    tips: ['Hip hinge movement', 'Power from hips', 'Keep core tight'],
    tipsAr: ['حركة مفصل الورك', 'القوة من الوركين', 'حافظ على شد البطن'],
    commonMistakes: ['Squatting instead of hinging', 'Using arms too much', 'Leaning back'],
    commonMistakesAr: ['القرفصاء بدلاً من الانحناء', 'استخدام الذراعين كثيراً', 'الميل للخلف'],
    primaryMuscles: ['Glutes', 'Hamstrings', 'Core'],
    secondaryMuscles: ['Shoulders', 'Back', 'Quadriceps'],
    mechanics: 'compound',
    force: 'push',
    isBodyweight: false,
    estimatedCaloriesPerRep: 2
  },
  {
    id: 'kettlebell-002',
    name: 'Goblet Squat',
    nameAr: 'تمرين القرفصاء مع الكتل بيل',
    description: 'Squat variation with kettlebell',
    descriptionAr: 'تنويع القرفصاء مع الكتل بيل',
    instructions: [
      'Hold kettlebell at chest level',
      'Stand with feet shoulder-width apart',
      'Squat down keeping chest up',
      'Return to standing position'
    ],
    instructionsAr: [
      'امسك الكتل بيل على مستوى الصدر',
      'قف مع القدمين على عرض الكتفين',
      'اقرفص مع الحفاظ على رفع الصدر',
      'ارجع إلى وضع الوقوف'
    ],
    muscleGroups: [MuscleGroup.QUADRICEPS, MuscleGroup.GLUTES, MuscleGroup.CORE],
    category: ExerciseCategory.STRENGTH,
    equipment: [Equipment.KETTLEBELL],
    difficulty: DifficultyLevel.BEGINNER,
    tips: ['Keep chest up', 'Elbows down', 'Full depth'],
    tipsAr: ['حافظ على رفع الصدر', 'المرفقين لأسفل', 'عمق كامل'],
    commonMistakes: ['Knees caving in', 'Leaning forward', 'Partial depth'],
    commonMistakesAr: ['انهيار الركبتين للداخل', 'الميل للأمام', 'عمق جزئي'],
    primaryMuscles: ['Quadriceps', 'Glutes'],
    secondaryMuscles: ['Hamstrings', 'Core', 'Calves'],
    mechanics: 'compound',
    force: 'push',
    isBodyweight: false,
    estimatedCaloriesPerRep: 2
  },

  // RESISTANCE BAND EXERCISES
  {
    id: 'band-001',
    name: 'Band Pull-Apart',
    nameAr: 'تمرين سحب الحزام',
    description: 'Rear deltoid and upper back exercise',
    descriptionAr: 'تمرين للدالية الخلفية وأعلى الظهر',
    instructions: [
      'Hold resistance band at chest height',
      'Pull band apart by squeezing shoulder blades',
      'Control the return to starting position',
      'Keep arms straight throughout'
    ],
    instructionsAr: [
      'امسك حزام المقاومة على مستوى الصدر',
      'اسحب الحزام بفصله من خلال ضغط لوحي الكتف',
      'تحكم في العودة إلى الوضع الابتدائي',
      'حافظ على استقامة الذراعين'
    ],
    muscleGroups: [MuscleGroup.SHOULDERS, MuscleGroup.BACK],
    category: ExerciseCategory.STRENGTH,
    equipment: [Equipment.RESISTANCE_BANDS],
    difficulty: DifficultyLevel.BEGINNER,
    tips: ['Squeeze shoulder blades', 'Control the movement', 'Keep arms level'],
    tipsAr: ['اضغط لوحي الكتف', 'تحكم في الحركة', 'حافظ على مستوى الذراعين'],
    commonMistakes: ['Using too much resistance', 'Bending arms', 'Poor posture'],
    commonMistakesAr: ['استخدام مقاومة مفرطة', 'ثني الذراعين', 'وضعية ضعيفة'],
    primaryMuscles: ['Rear deltoid', 'Rhomboids', 'Middle trapezius'],
    secondaryMuscles: ['Posterior deltoid', 'Lower trapezius'],
    mechanics: 'isolation',
    force: 'pull',
    isBodyweight: false,
    estimatedCaloriesPerRep: 0.8
  },
  {
    id: 'band-002',
    name: 'Band Squats',
    nameAr: 'تمرين القرفصاء بالحزام',
    description: 'Squat with resistance band',
    descriptionAr: 'تمرين القرفصاء مع حزام المقاومة',
    instructions: [
      'Step on band with both feet',
      'Hold handles at shoulder height',
      'Perform squat while maintaining band tension',
      'Stand up against band resistance'
    ],
    instructionsAr: [
      'قف على الحزام بكلتا القدمين',
      'امسك المقابض على مستوى الكتف',
      'نفذ القرفصاء مع الحفاظ على شد الحزام',
      'قف ضد مقاومة الحزام'
    ],
    muscleGroups: [MuscleGroup.QUADRICEPS, MuscleGroup.GLUTES],
    category: ExerciseCategory.STRENGTH,
    equipment: [Equipment.RESISTANCE_BANDS],
    difficulty: DifficultyLevel.BEGINNER,
    tips: ['Maintain band tension', 'Keep chest up', 'Control the movement'],
    tipsAr: ['حافظ على شد الحزام', 'حافظ على رفع الصدر', 'تحكم في الحركة'],
    commonMistakes: ['Losing band tension', 'Knees caving in', 'Shallow squats'],
    commonMistakesAr: ['فقدان شد الحزام', 'انهيار الركبتين', 'قرفصاء ضحلة'],
    primaryMuscles: ['Quadriceps', 'Glutes'],
    secondaryMuscles: ['Hamstrings', 'Core', 'Calves'],
    mechanics: 'compound',
    force: 'push',
    isBodyweight: false,
    estimatedCaloriesPerRep: 1.5
  },

  // CALISTHENICS EXERCISES
  {
    id: 'calisthenics-001',
    name: 'Pistol Squat',
    nameAr: 'تمرين القرفصاء بساق واحدة',
    description: 'Single-leg squat requiring balance and strength',
    descriptionAr: 'تمرين القرفصاء بساق واحدة يتطلب توازناً وقوة',
    instructions: [
      'Stand on one leg with other leg extended forward',
      'Lower into squat position on one leg',
      'Keep extended leg straight and parallel to ground',
      'Return to standing position'
    ],
    instructionsAr: [
      'قف على ساق واحدة مع مد الساق الأخرى للأمام',
      'انزل إلى وضع القرفصاء على ساق واحدة',
      'حافظ على استقامة الساق الممدودة وموازاتها للأرض',
      'ارجع إلى وضع الوقوف'
    ],
    muscleGroups: [MuscleGroup.QUADRICEPS, MuscleGroup.GLUTES, MuscleGroup.CORE],
    category: ExerciseCategory.STRENGTH,
    equipment: [Equipment.BODYWEIGHT],
    difficulty: DifficultyLevel.ADVANCED,
    tips: ['Start with assisted version', 'Focus on balance', 'Full range of motion'],
    tipsAr: ['ابدأ بالنسخة المساعدة', 'ركز على التوازن', 'نطاق حركة كامل'],
    commonMistakes: ['Using momentum', 'Partial range of motion', 'Poor balance'],
    commonMistakesAr: ['استخدام الزخم', 'نطاق حركة جزئي', 'توازن ضعيف'],
    primaryMuscles: ['Quadriceps', 'Glutes'],
    secondaryMuscles: ['Hamstrings', 'Core', 'Calves'],
    mechanics: 'compound',
    force: 'push',
    isBodyweight: true,
    estimatedCaloriesPerRep: 2.5
  },
  {
    id: 'calisthenics-002',
    name: 'Handstand Push-up',
    nameAr: 'تمرين الضغط على اليدين',
    description: 'Advanced inverted push-up',
    descriptionAr: 'تمرين ضغط متقدم مقلوب',
    instructions: [
      'Get into handstand position against wall',
      'Lower head toward ground by bending arms',
      'Push back up to starting position',
      'Maintain balance throughout'
    ],
    instructionsAr: [
      'اتخذ وضع الوقوف على اليدين مقابل الجدار',
      'اخفض الرأس نحو الأرض بثني الذراعين',
      'ادفع عائداً إلى الوضع الابتدائي',
      'حافظ على التوازن'
    ],
    muscleGroups: [MuscleGroup.SHOULDERS, MuscleGroup.TRICEPS, MuscleGroup.CORE],
    category: ExerciseCategory.STRENGTH,
    equipment: [Equipment.BODYWEIGHT],
    difficulty: DifficultyLevel.EXPERT,
    tips: ['Master handstand first', 'Use wall for support', 'Control the movement'],
    tipsAr: ['اتقن الوقوف على اليدين أولاً', 'استخدم الجدار للدعم', 'تحكم في الحركة'],
    commonMistakes: ['Poor handstand form', 'Too much arch in back', 'Uncontrolled movement'],
    commonMistakesAr: ['شكل وقوف ضعيف على اليدين', 'تقوس مفرط في الظهر', 'حركة غير مسيطر عليها'],
    primaryMuscles: ['Shoulders', 'Triceps'],
    secondaryMuscles: ['Core', 'Chest', 'Upper back'],
    mechanics: 'compound',
    force: 'push',
    isBodyweight: true,
    estimatedCaloriesPerRep: 3
  },

  // PLYOMETRIC EXERCISES
  {
    id: 'plyometric-001',
    name: 'Box Jumps',
    nameAr: 'تمرين القفز على الصندوق',
    description: 'Explosive jumping exercise',
    descriptionAr: 'تمرين قفز انفجاري',
    instructions: [
      'Stand facing a sturdy box or platform',
      'Jump explosively onto the box',
      'Land softly with both feet',
      'Step down and repeat'
    ],
    instructionsAr: [
      'قف مواجهاً صندوقاً أو منصة قوية',
      'اقفز بشكل انفجاري على الصندوق',
      'اهبط بنعومة بكلتا القدمين',
      'انزل وكرر'
    ],
    muscleGroups: [MuscleGroup.QUADRICEPS, MuscleGroup.GLUTES, MuscleGroup.CALVES],
    category: ExerciseCategory.PLYOMETRIC,
    equipment: [Equipment.BODYWEIGHT],
    difficulty: DifficultyLevel.INTERMEDIATE,
    tips: ['Land softly', 'Use arms for momentum', 'Start with lower box'],
    tipsAr: ['اهبط بنعومة', 'استخدم الذراعين للزخم', 'ابدأ بصندوق أقل ارتفاعاً'],
    commonMistakes: ['Landing too hard', 'Jumping down instead of stepping', 'Poor landing form'],
    commonMistakesAr: ['الهبوط بقوة', 'القفز للأسفل بدلاً من النزول', 'شكل هبوط ضعيف'],
    primaryMuscles: ['Quadriceps', 'Glutes', 'Calves'],
    secondaryMuscles: ['Hamstrings', 'Core', 'Ankles'],
    mechanics: 'compound',
    force: 'push',
    isBodyweight: true,
    estimatedCaloriesPerRep: 3
  },
  {
    id: 'plyometric-002',
    name: 'Clap Push-ups',
    nameAr: 'تمرين الضغط مع التصفيق',
    description: 'Explosive push-up variation',
    descriptionAr: 'تنويع انفجاري لتمرين الضغط',
    instructions: [
      'Start in push-up position',
      'Lower body to ground',
      'Push up explosively and clap hands',
      'Land with hands in starting position'
    ],
    instructionsAr: [
      'ابدأ في وضع تمرين الضغط',
      'اخفض الجسم إلى الأرض',
      'ادفع لأعلى بشكل انفجاري وصفق باليدين',
      'اهبط مع اليدين في الوضع الابتدائي'
    ],
    muscleGroups: [MuscleGroup.CHEST, MuscleGroup.SHOULDERS, MuscleGroup.TRICEPS],
    category: ExerciseCategory.PLYOMETRIC,
    equipment: [Equipment.BODYWEIGHT],
    difficulty: DifficultyLevel.ADVANCED,
    tips: ['Build up power gradually', 'Land softly', 'Master regular push-ups first'],
    tipsAr: ['بناء القوة تدريجياً', 'اهبط بنعومة', 'اتقن تمرين الضغط العادي أولاً'],
    commonMistakes: ['Insufficient push-off power', 'Poor landing', 'Wrong hand position'],
    commonMistakesAr: ['قوة دفع غير كافية', 'هبوط ضعيف', 'وضع يد خاطئ'],
    primaryMuscles: ['Chest', 'Shoulders', 'Triceps'],
    secondaryMuscles: ['Core', 'Fast-twitch muscle fibers'],
    mechanics: 'compound',
    force: 'push',
    isBodyweight: true,
    estimatedCaloriesPerRep: 2
  },

  // REHABILITATION EXERCISES
  {
    id: 'rehab-001',
    name: 'Wall Slides',
    nameAr: 'تمرين انزلاق الجدار',
    description: 'Shoulder mobility and posture exercise',
    descriptionAr: 'تمرين حركة الكتف والوضعية',
    instructions: [
      'Stand with back against wall',
      'Place arms against wall in goal post position',
      'Slide arms up and down maintaining wall contact',
      'Keep lower back pressed against wall'
    ],
    instructionsAr: [
      'قف مع الظهر مقابل الجدار',
      'ضع الذراعين على الجدار في وضع الهدف',
      'اسحب الذراعين لأعلى وأسفل مع الحفاظ على التلامس مع الجدار',
      'حافظ على ضغط أسفل الظهر على الجدار'
    ],
    muscleGroups: [MuscleGroup.SHOULDERS, MuscleGroup.BACK],
    category: ExerciseCategory.REHABILITATION,
    equipment: [Equipment.BODYWEIGHT],
    difficulty: DifficultyLevel.BEGINNER,
    tips: ['Keep arms against wall', 'Slow controlled movement', 'Focus on range of motion'],
    tipsAr: ['حافظ على الذراعين على الجدار', 'حركة بطيئة ومسيطر عليها', 'ركز على نطاق الحركة'],
    commonMistakes: ['Arching back', 'Losing wall contact', 'Moving too fast'],
    commonMistakesAr: ['تقوس الظهر', 'فقدان التلامس مع الجدار', 'التحرك بسرعة'],
    primaryMuscles: ['Shoulders', 'Upper back'],
    secondaryMuscles: ['Core', 'Postural muscles'],
    mechanics: 'compound',
    force: 'pull',
    isBodyweight: true,
    estimatedCaloriesPerRep: 0.5
  },
  {
    id: 'rehab-002',
    name: 'Glute Bridges',
    nameAr: 'تمرين جسر المؤخرة',
    description: 'Hip extension and glute activation exercise',
    descriptionAr: 'تمرين امتداد الورك وتفعيل المؤخرة',
    instructions: [
      'Lie on back with knees bent',
      'Lift hips by squeezing glutes',
      'Create straight line from knees to shoulders',
      'Lower with control and repeat'
    ],
    instructionsAr: [
      'استلق على الظهر مع ثني الركبتين',
      'ارفع الوركين بضغط عضلات المؤخرة',
      'أنشئ خطاً مستقيماً من الركبتين إلى الكتفين',
      'انزل بتحكم وكرر'
    ],
    muscleGroups: [MuscleGroup.GLUTES, MuscleGroup.HAMSTRINGS],
    category: ExerciseCategory.REHABILITATION,
    equipment: [Equipment.BODYWEIGHT],
    difficulty: DifficultyLevel.BEGINNER,
    tips: ['Squeeze glutes at top', 'Keep core engaged', 'Full range of motion'],
    tipsAr: ['اضغط المؤخرة في الأعلى', 'حافظ على شد البطن', 'نطاق حركة كامل'],
    commonMistakes: ['Using back instead of glutes', 'Partial range of motion', 'Feet too close'],
    commonMistakesAr: ['استخدام الظهر بدلاً من المؤخرة', 'نطاق حركة جزئي', 'قدمين قريبتين جداً'],
    primaryMuscles: ['Glutes', 'Hamstrings'],
    secondaryMuscles: ['Core', 'Erector spinae'],
    mechanics: 'compound',
    force: 'push',
    isBodyweight: true,
    estimatedCaloriesPerRep: 1
  },

  // BALANCE EXERCISES
  {
    id: 'balance-001',
    name: 'Single Leg Stand',
    nameAr: 'تمرين الوقوف على ساق واحدة',
    description: 'Balance and stability exercise',
    descriptionAr: 'تمرين توازن واستقرار',
    instructions: [
      'Stand on one leg',
      'Lift other leg off ground',
      'Maintain balance for desired time',
      'Switch legs and repeat'
    ],
    instructionsAr: [
      'قف على ساق واحدة',
      'ارفع الساق الأخرى عن الأرض',
      'حافظ على التوازن للوقت المطلوب',
      'بدل الساقين وكرر'
    ],
    muscleGroups: [MuscleGroup.CALVES, MuscleGroup.CORE],
    category: ExerciseCategory.BALANCE,
    equipment: [Equipment.BODYWEIGHT],
    difficulty: DifficultyLevel.BEGINNER,
    tips: ['Focus on one spot', 'Engage core', 'Start with short holds'],
    tipsAr: ['ركز على نقطة واحدة', 'فعل عضلات البطن', 'ابدأ بفترات قصيرة'],
    commonMistakes: ['Looking down', 'Tensing up', 'Moving too much'],
    commonMistakesAr: ['النظر لأسفل', 'التوتر الزائد', 'التحرك كثيراً'],
    primaryMuscles: ['Stabilizer muscles', 'Core'],
    secondaryMuscles: ['Ankles', 'Calves', 'Proprioceptors'],
    mechanics: 'isolation',
    force: 'static',
    isBodyweight: true,
    estimatedCaloriesPerRep: 0.3
  },
  {
    id: 'balance-002',
    name: 'Bosu Ball Squats',
    nameAr: 'تمرين القرفصاء على كرة التوازن',
    description: 'Balance training combined with squats',
    descriptionAr: 'تدريب التوازن مع القرفصاء',
    instructions: [
      'Stand on Bosu ball',
      'Maintain balance while performing squats',
      'Keep core engaged throughout',
      'Focus on stability and control'
    ],
    instructionsAr: [
      'قف على كرة البوسو',
      'حافظ على التوازن أثناء أداء القرفصاء',
      'حافظ على شد البطن',
      'ركز على الاستقرار والتحكم'
    ],
    muscleGroups: [MuscleGroup.QUADRICEPS, MuscleGroup.GLUTES, MuscleGroup.CORE],
    category: ExerciseCategory.BALANCE,
    equipment: [Equipment.BODYWEIGHT],
    difficulty: DifficultyLevel.INTERMEDIATE,
    tips: ['Start with static balance', 'Move slowly', 'Keep chest up'],
    tipsAr: ['ابدأ بالتوازن الثابت', 'تحرك ببطء', 'حافظ على رفع الصدر'],
    commonMistakes: ['Moving too fast', 'Losing balance', 'Poor squat form'],
    commonMistakesAr: ['التحرك بسرعة', 'فقدان التوازن', 'شكل قرفصاء ضعيف'],
    primaryMuscles: ['Quadriceps', 'Glutes', 'Core'],
    secondaryMuscles: ['Stabilizer muscles', 'Ankles', 'Proprioceptors'],
    mechanics: 'compound',
    force: 'push',
    isBodyweight: true,
    estimatedCaloriesPerRep: 2
  }
];

// Helper functions for filtering exercises
export const getExercisesByMuscleGroup = (muscleGroup: MuscleGroup): Exercise[] => {
  return EXERCISES.filter(exercise => exercise.muscleGroups.includes(muscleGroup));
};

export const getExercisesByCategory = (category: ExerciseCategory): Exercise[] => {
  return EXERCISES.filter(exercise => exercise.category === category);
};

export const getExercisesByEquipment = (equipment: Equipment): Exercise[] => {
  return EXERCISES.filter(exercise => exercise.equipment.includes(equipment));
};

export const getExercisesByDifficulty = (difficulty: DifficultyLevel): Exercise[] => {
  return EXERCISES.filter(exercise => exercise.difficulty === difficulty);
};

export const getBodyweightExercises = (): Exercise[] => {
  return EXERCISES.filter(exercise => exercise.isBodyweight);
};

export const searchExercises = (query: string): Exercise[] => {
  const lowerQuery = query.toLowerCase();
  return EXERCISES.filter(exercise => 
    exercise.name.toLowerCase().includes(lowerQuery) ||
    exercise.nameAr.includes(lowerQuery) ||
    exercise.description.toLowerCase().includes(lowerQuery) ||
    exercise.descriptionAr.includes(lowerQuery) ||
    exercise.primaryMuscles.some(muscle => muscle.toLowerCase().includes(lowerQuery))
  );
};

// Export exercise statistics
export const EXERCISE_STATS = {
  totalExercises: EXERCISES.length,
  byCategory: {
    [ExerciseCategory.STRENGTH]: getExercisesByCategory(ExerciseCategory.STRENGTH).length,
    [ExerciseCategory.CARDIO]: getExercisesByCategory(ExerciseCategory.CARDIO).length,
    [ExerciseCategory.FLEXIBILITY]: getExercisesByCategory(ExerciseCategory.FLEXIBILITY).length,
    [ExerciseCategory.BALANCE]: getExercisesByCategory(ExerciseCategory.BALANCE).length,
    [ExerciseCategory.PLYOMETRIC]: getExercisesByCategory(ExerciseCategory.PLYOMETRIC).length,
    [ExerciseCategory.REHABILITATION]: getExercisesByCategory(ExerciseCategory.REHABILITATION).length,
  },
  byMuscleGroup: {
    [MuscleGroup.CHEST]: getExercisesByMuscleGroup(MuscleGroup.CHEST).length,
    [MuscleGroup.BACK]: getExercisesByMuscleGroup(MuscleGroup.BACK).length,
    [MuscleGroup.SHOULDERS]: getExercisesByMuscleGroup(MuscleGroup.SHOULDERS).length,
    [MuscleGroup.BICEPS]: getExercisesByMuscleGroup(MuscleGroup.BICEPS).length,
    [MuscleGroup.TRICEPS]: getExercisesByMuscleGroup(MuscleGroup.TRICEPS).length,
    [MuscleGroup.CORE]: getExercisesByMuscleGroup(MuscleGroup.CORE).length,
    [MuscleGroup.QUADRICEPS]: getExercisesByMuscleGroup(MuscleGroup.QUADRICEPS).length,
    [MuscleGroup.HAMSTRINGS]: getExercisesByMuscleGroup(MuscleGroup.HAMSTRINGS).length,
    [MuscleGroup.GLUTES]: getExercisesByMuscleGroup(MuscleGroup.GLUTES).length,
    [MuscleGroup.CALVES]: getExercisesByMuscleGroup(MuscleGroup.CALVES).length,
  },
  bodyweightCount: getBodyweightExercises().length,
  equipmentRequired: EXERCISES.filter(ex => !ex.isBodyweight).length
};
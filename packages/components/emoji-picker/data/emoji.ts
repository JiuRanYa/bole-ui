import { Emoji } from "../props";

const emojiList: {[key: string]: Emoji[]} = {
  常用: [
    {
      n: ['grinning', 'grinning face'],
      u: '1f600',
      a: '1.0'
    },
    {
      n: ['smiley', 'smiling face with open mouth'],
      u: '1f603',
      a: '0.6'
    },
    {
      n: ['smile', 'smiling face with open mouth and smiling eyes'],
      u: '1f604',
      a: '0.6'
    },
    {
      n: ['grin', 'grinning face with smiling eyes'],
      u: '1f601',
      a: '0.6'
    },
    {
      n: [
        'laughing',
        'satisfied',
        'smiling face with open mouth and tightly-closed eyes'
      ],
      u: '1f606',
      a: '0.6'
    },
    {
      n: ['sweat smile', 'smiling face with open mouth and cold sweat'],
      u: '1f605',
      a: '0.6'
    },
    {
      n: ['rolling on the floor laughing'],
      u: '1f923',
      a: '3.0'
    },
    {
      n: ['joy', 'face with tears of joy'],
      u: '1f602',
      a: '0.6'
    },
    {
      n: ['slightly smiling face'],
      u: '1f642',
      a: '1.0'
    },
    {
      n: ['upside-down face', 'upside down face'],
      u: '1f643',
      a: '1.0'
    },
    {
      n: ['melting face'],
      u: '1fae0',
      a: '14.0'
    },
    {
      n: ['wink', 'winking face'],
      u: '1f609',
      a: '0.6'
    },
    {
      n: ['blush', 'smiling face with smiling eyes'],
      u: '1f60a',
      a: '0.6'
    },
    {
      n: ['innocent', 'smiling face with halo'],
      u: '1f607',
      a: '1.0'
    },
    {
      n: [
        'smiling face with 3 hearts',
        'smiling face with smiling eyes and three hearts'
      ],
      u: '1f970',
      a: '11.0'
    },
    {
      n: ['heart eyes', 'smiling face with heart-shaped eyes'],
      u: '1f60d',
      a: '0.6'
    },
    {
      n: ['star-struck', 'grinning face with star eyes'],
      u: '1f929',
      a: '5.0'
    },
    {
      n: ['kissing heart', 'face throwing a kiss'],
      u: '1f618',
      a: '0.6'
    },
    {
      n: ['kissing', 'kissing face'],
      u: '1f617',
      a: '1.0'
    },
    {
      n: ['relaxed', 'white smiling face'],
      u: '263a-fe0f',
      a: '0.6'
    },
    {
      n: ['kissing closed eyes', 'kissing face with closed eyes'],
      u: '1f61a',
      a: '0.6'
    },
    {
      n: ['kissing smiling eyes', 'kissing face with smiling eyes'],
      u: '1f619',
      a: '1.0'
    },
    {
      n: ['smiling face with tear'],
      u: '1f972',
      a: '13.0'
    },
    {
      n: ['yum', 'face savouring delicious food'],
      u: '1f60b',
      a: '0.6'
    },
    {
      n: ['stuck out tongue', 'face with stuck-out tongue'],
      u: '1f61b',
      a: '1.0'
    },
    {
      n: [
        'stuck out tongue winking eye',
        'face with stuck-out tongue and winking eye'
      ],
      u: '1f61c',
      a: '0.6'
    },
    {
      n: ['zany face', 'grinning face with one large and one small eye'],
      u: '1f92a',
      a: '5.0'
    },
    {
      n: [
        'stuck out tongue closed eyes',
        'face with stuck-out tongue and tightly-closed eyes'
      ],
      u: '1f61d',
      a: '0.6'
    },
    {
      n: ['money-mouth face', 'money mouth face'],
      u: '1f911',
      a: '1.0'
    },
    {
      n: ['hugging face'],
      u: '1f917',
      a: '1.0'
    },
    {
      n: [
        'face with hand over mouth',
        'smiling face with smiling eyes and hand covering mouth'
      ],
      u: '1f92d',
      a: '5.0'
    },
    {
      n: ['face with open eyes and hand over mouth'],
      u: '1fae2',
      a: '14.0'
    },
    {
      n: ['face with peeking eye'],
      u: '1fae3',
      a: '14.0'
    },
    {
      n: ['shushing face', 'face with finger covering closed lips'],
      u: '1f92b',
      a: '5.0'
    },
    {
      n: ['thinking face'],
      u: '1f914',
      a: '1.0'
    },
    {
      n: ['saluting face'],
      u: '1fae1',
      a: '14.0'
    },
    {
      n: ['zipper-mouth face', 'zipper mouth face'],
      u: '1f910',
      a: '1.0'
    },
    {
      n: ['face with raised eyebrow', 'face with one eyebrow raised'],
      u: '1f928',
      a: '5.0'
    },
    {
      n: ['neutral face'],
      u: '1f610',
      a: '0.7'
    },
    {
      n: ['expressionless', 'expressionless face'],
      u: '1f611',
      a: '1.0'
    },
    {
      n: ['no mouth', 'face without mouth'],
      u: '1f636',
      a: '1.0'
    },
    {
      n: ['dotted line face'],
      u: '1fae5',
      a: '14.0'
    },
    {
      n: ['face in clouds'],
      u: '1f636-200d-1f32b-fe0f',
      a: '13.1'
    },
    {
      n: ['smirk', 'smirking face'],
      u: '1f60f',
      a: '0.6'
    },
    {
      n: ['unamused', 'unamused face'],
      u: '1f612',
      a: '0.6'
    },
    {
      n: ['face with rolling eyes'],
      u: '1f644',
      a: '1.0'
    },
    {
      n: ['grimacing', 'grimacing face'],
      u: '1f62c',
      a: '1.0'
    },
    {
      n: ['face exhaling'],
      u: '1f62e-200d-1f4a8',
      a: '13.1'
    },
    {
      n: ['lying face'],
      u: '1f925',
      a: '3.0'
    },
    {
      n: ['relieved', 'relieved face'],
      u: '1f60c',
      a: '0.6'
    },
    {
      n: ['pensive', 'pensive face'],
      u: '1f614',
      a: '0.6'
    },
    {
      n: ['sleepy', 'sleepy face'],
      u: '1f62a',
      a: '0.6'
    },
    {
      n: ['drooling face'],
      u: '1f924',
      a: '3.0'
    },
    {
      n: ['sleeping', 'sleeping face'],
      u: '1f634',
      a: '1.0'
    },
    {
      n: ['mask', 'face with medical mask'],
      u: '1f637',
      a: '0.6'
    },
    {
      n: ['face with thermometer'],
      u: '1f912',
      a: '1.0'
    },
    {
      n: ['face with head-bandage', 'face with head bandage'],
      u: '1f915',
      a: '1.0'
    },
    {
      n: ['nauseated face'],
      u: '1f922',
      a: '3.0'
    },
    {
      n: ['face vomiting', 'face with open mouth vomiting'],
      u: '1f92e',
      a: '5.0'
    },
    {
      n: ['sneezing face'],
      u: '1f927',
      a: '3.0'
    },
    {
      n: ['hot face', 'overheated face'],
      u: '1f975',
      a: '11.0'
    },
    {
      n: ['cold face', 'freezing face'],
      u: '1f976',
      a: '11.0'
    },
    {
      n: ['woozy face', 'face with uneven eyes and wavy mouth'],
      u: '1f974',
      a: '11.0'
    },
    {
      n: ['dizzy face'],
      u: '1f635',
      a: '0.6'
    },
    {
      n: ['face with spiral eyes'],
      u: '1f635-200d-1f4ab',
      a: '13.1'
    },
    {
      n: ['exploding head', 'shocked face with exploding head'],
      u: '1f92f',
      a: '5.0'
    },
    {
      n: ['face with cowboy hat'],
      u: '1f920',
      a: '3.0'
    },
    {
      n: ['partying face', 'face with party horn and party hat'],
      u: '1f973',
      a: '11.0'
    },
    {
      n: ['disguised face'],
      u: '1f978',
      a: '13.0'
    },
    {
      n: ['sunglasses', 'smiling face with sunglasses'],
      u: '1f60e',
      a: '1.0'
    },
    {
      n: ['nerd face'],
      u: '1f913',
      a: '1.0'
    },
    {
      n: ['face with monocle'],
      u: '1f9d0',
      a: '5.0'
    },
    {
      n: ['confused', 'confused face'],
      u: '1f615',
      a: '1.0'
    },
    {
      n: ['face with diagonal mouth'],
      u: '1fae4',
      a: '14.0'
    },
    {
      n: ['worried', 'worried face'],
      u: '1f61f',
      a: '1.0'
    },
    {
      n: ['slightly frowning face'],
      u: '1f641',
      a: '1.0'
    },
    {
      n: ['frowning face', 'white frowning face'],
      u: '2639-fe0f',
      a: '0.7'
    },
    {
      n: ['open mouth', 'face with open mouth'],
      u: '1f62e',
      a: '1.0'
    },
    {
      n: ['hushed', 'hushed face'],
      u: '1f62f',
      a: '1.0'
    },
    {
      n: ['astonished', 'astonished face'],
      u: '1f632',
      a: '0.6'
    },
    {
      n: ['flushed', 'flushed face'],
      u: '1f633',
      a: '0.6'
    },
    {
      n: ['pleading face', 'face with pleading eyes'],
      u: '1f97a',
      a: '11.0'
    },
    {
      n: ['face holding back tears'],
      u: '1f979',
      a: '14.0'
    },
    {
      n: ['frowning', 'frowning face with open mouth'],
      u: '1f626',
      a: '1.0'
    },
    {
      n: ['anguished', 'anguished face'],
      u: '1f627',
      a: '1.0'
    },
    {
      n: ['fearful', 'fearful face'],
      u: '1f628',
      a: '0.6'
    },
    {
      n: ['cold sweat', 'face with open mouth and cold sweat'],
      u: '1f630',
      a: '0.6'
    },
    {
      n: ['disappointed relieved', 'disappointed but relieved face'],
      u: '1f625',
      a: '0.6'
    },
    {
      n: ['cry', 'crying face'],
      u: '1f622',
      a: '0.6'
    },
    {
      n: ['sob', 'loudly crying face'],
      u: '1f62d',
      a: '0.6'
    },
    {
      n: ['scream', 'face screaming in fear'],
      u: '1f631',
      a: '0.6'
    },
    {
      n: ['confounded', 'confounded face'],
      u: '1f616',
      a: '0.6'
    },
    {
      n: ['persevere', 'persevering face'],
      u: '1f623',
      a: '0.6'
    },
    {
      n: ['disappointed', 'disappointed face'],
      u: '1f61e',
      a: '0.6'
    },
    {
      n: ['sweat', 'face with cold sweat'],
      u: '1f613',
      a: '0.6'
    },
    {
      n: ['weary', 'weary face'],
      u: '1f629',
      a: '0.6'
    },
    {
      n: ['tired face'],
      u: '1f62b',
      a: '0.6'
    },
    {
      n: ['yawning face'],
      u: '1f971',
      a: '12.0'
    },
    {
      n: ['triumph', 'face with look of triumph'],
      u: '1f624',
      a: '0.6'
    },
    {
      n: ['rage', 'pouting face'],
      u: '1f621',
      a: '0.6'
    },
    {
      n: ['angry', 'angry face'],
      u: '1f620',
      a: '0.6'
    },
    {
      n: [
        'face with symbols on mouth',
        'serious face with symbols covering mouth'
      ],
      u: '1f92c',
      a: '5.0'
    },
    {
      n: ['smiling imp', 'smiling face with horns'],
      u: '1f608',
      a: '1.0'
    },
    {
      n: ['imp'],
      u: '1f47f',
      a: '0.6'
    },
    {
      n: ['skull'],
      u: '1f480',
      a: '0.6'
    },
    {
      n: ['skull and crossbones'],
      u: '2620-fe0f',
      a: '1.0'
    },
    {
      n: ['poop', 'shit', 'hankey', 'pile of poo'],
      u: '1f4a9',
      a: '0.6'
    },
    {
      n: ['clown face'],
      u: '1f921',
      a: '3.0'
    },
    {
      n: ['japanese ogre'],
      u: '1f479',
      a: '0.6'
    },
    {
      n: ['japanese goblin'],
      u: '1f47a',
      a: '0.6'
    },
    {
      n: ['ghost'],
      u: '1f47b',
      a: '0.6'
    },
    {
      n: ['alien', 'extraterrestrial alien'],
      u: '1f47d',
      a: '0.6'
    },
    {
      n: ['alien monster', 'space invader'],
      u: '1f47e',
      a: '0.6'
    },
    {
      n: ['robot face'],
      u: '1f916',
      a: '1.0'
    },
    {
      n: ['smiley cat', 'smiling cat face with open mouth'],
      u: '1f63a',
      a: '0.6'
    },
    {
      n: ['smile cat', 'grinning cat face with smiling eyes'],
      u: '1f638',
      a: '0.6'
    },
    {
      n: ['joy cat', 'cat face with tears of joy'],
      u: '1f639',
      a: '0.6'
    },
    {
      n: ['heart eyes cat', 'smiling cat face with heart-shaped eyes'],
      u: '1f63b',
      a: '0.6'
    },
    {
      n: ['smirk cat', 'cat face with wry smile'],
      u: '1f63c',
      a: '0.6'
    },
    {
      n: ['kissing cat', 'kissing cat face with closed eyes'],
      u: '1f63d',
      a: '0.6'
    },
    {
      n: ['scream cat', 'weary cat face'],
      u: '1f640',
      a: '0.6'
    },
    {
      n: ['crying cat face'],
      u: '1f63f',
      a: '0.6'
    },
    {
      n: ['pouting cat', 'pouting cat face'],
      u: '1f63e',
      a: '0.6'
    },
    {
      n: ['see no evil', 'see-no-evil monkey'],
      u: '1f648',
      a: '0.6'
    },
    {
      n: ['hear no evil', 'hear-no-evil monkey'],
      u: '1f649',
      a: '0.6'
    },
    {
      n: ['speak no evil', 'speak-no-evil monkey'],
      u: '1f64a',
      a: '0.6'
    },
    {
      n: ['kiss', 'kiss mark'],
      u: '1f48b',
      a: '0.6'
    },
    {
      n: ['love letter'],
      u: '1f48c',
      a: '0.6'
    },
    {
      n: ['cupid', 'heart with arrow'],
      u: '1f498',
      a: '0.6'
    },
    {
      n: ['gift heart', 'heart with ribbon'],
      u: '1f49d',
      a: '0.6'
    },
    {
      n: ['sparkling heart'],
      u: '1f496',
      a: '0.6'
    },
    {
      n: ['heartpulse', 'growing heart'],
      u: '1f497',
      a: '0.6'
    },
    {
      n: ['heartbeat', 'beating heart'],
      u: '1f493',
      a: '0.6'
    },
    {
      n: ['revolving hearts'],
      u: '1f49e',
      a: '0.6'
    },
    {
      n: ['two hearts'],
      u: '1f495',
      a: '0.6'
    },
    {
      n: ['heart decoration'],
      u: '1f49f',
      a: '0.6'
    },
    {
      n: ['heart exclamation', 'heavy heart exclamation mark ornament'],
      u: '2763-fe0f',
      a: '1.0'
    },
    {
      n: ['broken heart'],
      u: '1f494',
      a: '0.6'
    },
    {
      n: ['heart on fire'],
      u: '2764-fe0f-200d-1f525',
      a: '13.1'
    },
    {
      n: ['mending heart'],
      u: '2764-fe0f-200d-1fa79',
      a: '13.1'
    },
    {
      n: ['heart', 'heavy black heart'],
      u: '2764-fe0f',
      a: '0.6'
    },
    {
      n: ['orange heart'],
      u: '1f9e1',
      a: '5.0'
    },
    {
      n: ['yellow heart'],
      u: '1f49b',
      a: '0.6'
    },
    {
      n: ['green heart'],
      u: '1f49a',
      a: '0.6'
    },
    {
      n: ['blue heart'],
      u: '1f499',
      a: '0.6'
    },
    {
      n: ['purple heart'],
      u: '1f49c',
      a: '0.6'
    },
    {
      n: ['brown heart'],
      u: '1f90e',
      a: '12.0'
    },
    {
      n: ['black heart'],
      u: '1f5a4',
      a: '3.0'
    },
    {
      n: ['white heart'],
      u: '1f90d',
      a: '12.0'
    },
    {
      n: ['100', 'hundred points symbol'],
      u: '1f4af',
      a: '0.6'
    },
    {
      n: ['anger', 'anger symbol'],
      u: '1f4a2',
      a: '0.6'
    },
    {
      n: ['boom', 'collision', 'collision symbol'],
      u: '1f4a5',
      a: '0.6'
    },
    {
      n: ['dizzy', 'dizzy symbol'],
      u: '1f4ab',
      a: '0.6'
    },
    {
      n: ['sweat drops', 'splashing sweat symbol'],
      u: '1f4a6',
      a: '0.6'
    },
    {
      n: ['dash', 'dash symbol'],
      u: '1f4a8',
      a: '0.6'
    },
    {
      n: ['hole'],
      u: '1f573-fe0f',
      a: '0.7'
    },
    {
      n: ['bomb'],
      u: '1f4a3',
      a: '0.6'
    },
    {
      n: ['speech balloon'],
      u: '1f4ac',
      a: '0.6'
    },
    {
      n: ['eye in speech bubble', 'eye-in-speech-bubble'],
      u: '1f441-fe0f-200d-1f5e8-fe0f',
      a: '2.0'
    },
    {
      n: ['left speech bubble'],
      u: '1f5e8-fe0f',
      a: '2.0'
    },
    {
      n: ['right anger bubble'],
      u: '1f5ef-fe0f',
      a: '0.7'
    },
    {
      n: ['thought balloon'],
      u: '1f4ad',
      a: '1.0'
    },
    {
      n: ['zzz', 'sleeping symbol'],
      u: '1f4a4',
      a: '0.6'
    },
    {
      n: ['wave', 'waving hand sign'],
      u: '1f44b',
      v: [
        '1f44b-1f3fb',
        '1f44b-1f3fc',
        '1f44b-1f3fd',
        '1f44b-1f3fe',
        '1f44b-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['raised back of hand'],
      u: '1f91a',
      v: [
        '1f91a-1f3fb',
        '1f91a-1f3fc',
        '1f91a-1f3fd',
        '1f91a-1f3fe',
        '1f91a-1f3ff'
      ],
      a: '3.0'
    },
    {
      n: ['hand with fingers splayed', 'raised hand with fingers splayed'],
      u: '1f590-fe0f',
      v: [
        '1f590-1f3fb',
        '1f590-1f3fc',
        '1f590-1f3fd',
        '1f590-1f3fe',
        '1f590-1f3ff'
      ],
      a: '0.7'
    },
    {
      n: ['hand', 'raised hand'],
      u: '270b',
      v: ['270b-1f3fb', '270b-1f3fc', '270b-1f3fd', '270b-1f3fe', '270b-1f3ff'],
      a: '0.6'
    },
    {
      n: [
        'spock-hand',
        'raised hand with part between middle and ring fingers'
      ],
      u: '1f596',
      v: [
        '1f596-1f3fb',
        '1f596-1f3fc',
        '1f596-1f3fd',
        '1f596-1f3fe',
        '1f596-1f3ff'
      ],
      a: '1.0'
    },
    {
      n: ['rightwards hand'],
      u: '1faf1',
      v: [
        '1faf1-1f3fb',
        '1faf1-1f3fc',
        '1faf1-1f3fd',
        '1faf1-1f3fe',
        '1faf1-1f3ff'
      ],
      a: '14.0'
    },
    {
      n: ['leftwards hand'],
      u: '1faf2',
      v: [
        '1faf2-1f3fb',
        '1faf2-1f3fc',
        '1faf2-1f3fd',
        '1faf2-1f3fe',
        '1faf2-1f3ff'
      ],
      a: '14.0'
    },
    {
      n: ['palm down hand'],
      u: '1faf3',
      v: [
        '1faf3-1f3fb',
        '1faf3-1f3fc',
        '1faf3-1f3fd',
        '1faf3-1f3fe',
        '1faf3-1f3ff'
      ],
      a: '14.0'
    },
    {
      n: ['palm up hand'],
      u: '1faf4',
      v: [
        '1faf4-1f3fb',
        '1faf4-1f3fc',
        '1faf4-1f3fd',
        '1faf4-1f3fe',
        '1faf4-1f3ff'
      ],
      a: '14.0'
    },
    {
      n: ['ok hand', 'ok hand sign'],
      u: '1f44c',
      v: [
        '1f44c-1f3fb',
        '1f44c-1f3fc',
        '1f44c-1f3fd',
        '1f44c-1f3fe',
        '1f44c-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['pinched fingers'],
      u: '1f90c',
      v: [
        '1f90c-1f3fb',
        '1f90c-1f3fc',
        '1f90c-1f3fd',
        '1f90c-1f3fe',
        '1f90c-1f3ff'
      ],
      a: '13.0'
    },
    {
      n: ['pinching hand'],
      u: '1f90f',
      v: [
        '1f90f-1f3fb',
        '1f90f-1f3fc',
        '1f90f-1f3fd',
        '1f90f-1f3fe',
        '1f90f-1f3ff'
      ],
      a: '12.0'
    },
    {
      n: ['v', 'victory hand'],
      u: '270c-fe0f',
      v: ['270c-1f3fb', '270c-1f3fc', '270c-1f3fd', '270c-1f3fe', '270c-1f3ff'],
      a: '0.6'
    },
    {
      n: ['crossed fingers', 'hand with index and middle fingers crossed'],
      u: '1f91e',
      v: [
        '1f91e-1f3fb',
        '1f91e-1f3fc',
        '1f91e-1f3fd',
        '1f91e-1f3fe',
        '1f91e-1f3ff'
      ],
      a: '3.0'
    },
    {
      n: ['hand with index finger and thumb crossed'],
      u: '1faf0',
      v: [
        '1faf0-1f3fb',
        '1faf0-1f3fc',
        '1faf0-1f3fd',
        '1faf0-1f3fe',
        '1faf0-1f3ff'
      ],
      a: '14.0'
    },
    {
      n: ['i love you hand sign'],
      u: '1f91f',
      v: [
        '1f91f-1f3fb',
        '1f91f-1f3fc',
        '1f91f-1f3fd',
        '1f91f-1f3fe',
        '1f91f-1f3ff'
      ],
      a: '5.0'
    },
    {
      n: ['the horns', 'sign of the horns'],
      u: '1f918',
      v: [
        '1f918-1f3fb',
        '1f918-1f3fc',
        '1f918-1f3fd',
        '1f918-1f3fe',
        '1f918-1f3ff'
      ],
      a: '1.0'
    },
    {
      n: ['call me hand'],
      u: '1f919',
      v: [
        '1f919-1f3fb',
        '1f919-1f3fc',
        '1f919-1f3fd',
        '1f919-1f3fe',
        '1f919-1f3ff'
      ],
      a: '3.0'
    },
    {
      n: ['point left', 'white left pointing backhand index'],
      u: '1f448',
      v: [
        '1f448-1f3fb',
        '1f448-1f3fc',
        '1f448-1f3fd',
        '1f448-1f3fe',
        '1f448-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['point right', 'white right pointing backhand index'],
      u: '1f449',
      v: [
        '1f449-1f3fb',
        '1f449-1f3fc',
        '1f449-1f3fd',
        '1f449-1f3fe',
        '1f449-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['point up 2', 'white up pointing backhand index'],
      u: '1f446',
      v: [
        '1f446-1f3fb',
        '1f446-1f3fc',
        '1f446-1f3fd',
        '1f446-1f3fe',
        '1f446-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['middle finger', 'reversed hand with middle finger extended'],
      u: '1f595',
      v: [
        '1f595-1f3fb',
        '1f595-1f3fc',
        '1f595-1f3fd',
        '1f595-1f3fe',
        '1f595-1f3ff'
      ],
      a: '1.0'
    },
    {
      n: ['point down', 'white down pointing backhand index'],
      u: '1f447',
      v: [
        '1f447-1f3fb',
        '1f447-1f3fc',
        '1f447-1f3fd',
        '1f447-1f3fe',
        '1f447-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['point up', 'white up pointing index'],
      u: '261d-fe0f',
      v: ['261d-1f3fb', '261d-1f3fc', '261d-1f3fd', '261d-1f3fe', '261d-1f3ff'],
      a: '0.6'
    },
    {
      n: ['index pointing at the viewer'],
      u: '1faf5',
      v: [
        '1faf5-1f3fb',
        '1faf5-1f3fc',
        '1faf5-1f3fd',
        '1faf5-1f3fe',
        '1faf5-1f3ff'
      ],
      a: '14.0'
    },
    {
      n: ['+1', 'thumbsup', 'thumbs up sign'],
      u: '1f44d',
      v: [
        '1f44d-1f3fb',
        '1f44d-1f3fc',
        '1f44d-1f3fd',
        '1f44d-1f3fe',
        '1f44d-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['-1', 'thumbsdown', 'thumbs down sign'],
      u: '1f44e',
      v: [
        '1f44e-1f3fb',
        '1f44e-1f3fc',
        '1f44e-1f3fd',
        '1f44e-1f3fe',
        '1f44e-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['fist', 'raised fist'],
      u: '270a',
      v: ['270a-1f3fb', '270a-1f3fc', '270a-1f3fd', '270a-1f3fe', '270a-1f3ff'],
      a: '0.6'
    },
    {
      n: ['punch', 'facepunch', 'fisted hand sign'],
      u: '1f44a',
      v: [
        '1f44a-1f3fb',
        '1f44a-1f3fc',
        '1f44a-1f3fd',
        '1f44a-1f3fe',
        '1f44a-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['left-facing fist'],
      u: '1f91b',
      v: [
        '1f91b-1f3fb',
        '1f91b-1f3fc',
        '1f91b-1f3fd',
        '1f91b-1f3fe',
        '1f91b-1f3ff'
      ],
      a: '3.0'
    },
    {
      n: ['right-facing fist'],
      u: '1f91c',
      v: [
        '1f91c-1f3fb',
        '1f91c-1f3fc',
        '1f91c-1f3fd',
        '1f91c-1f3fe',
        '1f91c-1f3ff'
      ],
      a: '3.0'
    },
    {
      n: ['clap', 'clapping hands sign'],
      u: '1f44f',
      v: [
        '1f44f-1f3fb',
        '1f44f-1f3fc',
        '1f44f-1f3fd',
        '1f44f-1f3fe',
        '1f44f-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['raised hands', 'person raising both hands in celebration'],
      u: '1f64c',
      v: [
        '1f64c-1f3fb',
        '1f64c-1f3fc',
        '1f64c-1f3fd',
        '1f64c-1f3fe',
        '1f64c-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['heart hands'],
      u: '1faf6',
      v: [
        '1faf6-1f3fb',
        '1faf6-1f3fc',
        '1faf6-1f3fd',
        '1faf6-1f3fe',
        '1faf6-1f3ff'
      ],
      a: '14.0'
    },
    {
      n: ['open hands', 'open hands sign'],
      u: '1f450',
      v: [
        '1f450-1f3fb',
        '1f450-1f3fc',
        '1f450-1f3fd',
        '1f450-1f3fe',
        '1f450-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['palms up together'],
      u: '1f932',
      v: [
        '1f932-1f3fb',
        '1f932-1f3fc',
        '1f932-1f3fd',
        '1f932-1f3fe',
        '1f932-1f3ff'
      ],
      a: '5.0'
    },
    {
      n: ['handshake'],
      u: '1f91d',
      v: [
        '1f91d-1f3fb',
        '1f91d-1f3fc',
        '1f91d-1f3fd',
        '1f91d-1f3fe',
        '1f91d-1f3ff',
        '1faf1-1f3fb-200d-1faf2-1f3fc',
        '1faf1-1f3fb-200d-1faf2-1f3fd',
        '1faf1-1f3fb-200d-1faf2-1f3fe',
        '1faf1-1f3fb-200d-1faf2-1f3ff',
        '1faf1-1f3fc-200d-1faf2-1f3fb',
        '1faf1-1f3fc-200d-1faf2-1f3fd',
        '1faf1-1f3fc-200d-1faf2-1f3fe',
        '1faf1-1f3fc-200d-1faf2-1f3ff',
        '1faf1-1f3fd-200d-1faf2-1f3fb',
        '1faf1-1f3fd-200d-1faf2-1f3fc',
        '1faf1-1f3fd-200d-1faf2-1f3fe',
        '1faf1-1f3fd-200d-1faf2-1f3ff',
        '1faf1-1f3fe-200d-1faf2-1f3fb',
        '1faf1-1f3fe-200d-1faf2-1f3fc',
        '1faf1-1f3fe-200d-1faf2-1f3fd',
        '1faf1-1f3fe-200d-1faf2-1f3ff',
        '1faf1-1f3ff-200d-1faf2-1f3fb',
        '1faf1-1f3ff-200d-1faf2-1f3fc',
        '1faf1-1f3ff-200d-1faf2-1f3fd',
        '1faf1-1f3ff-200d-1faf2-1f3fe'
      ],
      a: '3.0'
    },
    {
      n: ['pray', 'person with folded hands'],
      u: '1f64f',
      v: [
        '1f64f-1f3fb',
        '1f64f-1f3fc',
        '1f64f-1f3fd',
        '1f64f-1f3fe',
        '1f64f-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['writing hand'],
      u: '270d-fe0f',
      v: ['270d-1f3fb', '270d-1f3fc', '270d-1f3fd', '270d-1f3fe', '270d-1f3ff'],
      a: '0.7'
    },
    {
      n: ['nail care', 'nail polish'],
      u: '1f485',
      v: [
        '1f485-1f3fb',
        '1f485-1f3fc',
        '1f485-1f3fd',
        '1f485-1f3fe',
        '1f485-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['selfie'],
      u: '1f933',
      v: [
        '1f933-1f3fb',
        '1f933-1f3fc',
        '1f933-1f3fd',
        '1f933-1f3fe',
        '1f933-1f3ff'
      ],
      a: '3.0'
    },
    {
      n: ['muscle', 'flexed biceps'],
      u: '1f4aa',
      v: [
        '1f4aa-1f3fb',
        '1f4aa-1f3fc',
        '1f4aa-1f3fd',
        '1f4aa-1f3fe',
        '1f4aa-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['mechanical arm'],
      u: '1f9be',
      a: '12.0'
    },
    {
      n: ['mechanical leg'],
      u: '1f9bf',
      a: '12.0'
    },
    {
      n: ['leg'],
      u: '1f9b5',
      v: [
        '1f9b5-1f3fb',
        '1f9b5-1f3fc',
        '1f9b5-1f3fd',
        '1f9b5-1f3fe',
        '1f9b5-1f3ff'
      ],
      a: '11.0'
    },
    {
      n: ['foot'],
      u: '1f9b6',
      v: [
        '1f9b6-1f3fb',
        '1f9b6-1f3fc',
        '1f9b6-1f3fd',
        '1f9b6-1f3fe',
        '1f9b6-1f3ff'
      ],
      a: '11.0'
    },
    {
      n: ['ear'],
      u: '1f442',
      v: [
        '1f442-1f3fb',
        '1f442-1f3fc',
        '1f442-1f3fd',
        '1f442-1f3fe',
        '1f442-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['ear with hearing aid'],
      u: '1f9bb',
      v: [
        '1f9bb-1f3fb',
        '1f9bb-1f3fc',
        '1f9bb-1f3fd',
        '1f9bb-1f3fe',
        '1f9bb-1f3ff'
      ],
      a: '12.0'
    },
    {
      n: ['nose'],
      u: '1f443',
      v: [
        '1f443-1f3fb',
        '1f443-1f3fc',
        '1f443-1f3fd',
        '1f443-1f3fe',
        '1f443-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['brain'],
      u: '1f9e0',
      a: '5.0'
    },
    {
      n: ['anatomical heart'],
      u: '1fac0',
      a: '13.0'
    },
    {
      n: ['lungs'],
      u: '1fac1',
      a: '13.0'
    },
    {
      n: ['tooth'],
      u: '1f9b7',
      a: '11.0'
    },
    {
      n: ['bone'],
      u: '1f9b4',
      a: '11.0'
    },
    {
      n: ['eyes'],
      u: '1f440',
      a: '0.6'
    },
    {
      n: ['eye'],
      u: '1f441-fe0f',
      a: '0.7'
    },
    {
      n: ['tongue'],
      u: '1f445',
      a: '0.6'
    },
    {
      n: ['lips', 'mouth'],
      u: '1f444',
      a: '0.6'
    },
    {
      n: ['biting lip'],
      u: '1fae6',
      a: '14.0'
    },
    {
      n: ['baby'],
      u: '1f476',
      v: [
        '1f476-1f3fb',
        '1f476-1f3fc',
        '1f476-1f3fd',
        '1f476-1f3fe',
        '1f476-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['child'],
      u: '1f9d2',
      v: [
        '1f9d2-1f3fb',
        '1f9d2-1f3fc',
        '1f9d2-1f3fd',
        '1f9d2-1f3fe',
        '1f9d2-1f3ff'
      ],
      a: '5.0'
    },
    {
      n: ['boy'],
      u: '1f466',
      v: [
        '1f466-1f3fb',
        '1f466-1f3fc',
        '1f466-1f3fd',
        '1f466-1f3fe',
        '1f466-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['girl'],
      u: '1f467',
      v: [
        '1f467-1f3fb',
        '1f467-1f3fc',
        '1f467-1f3fd',
        '1f467-1f3fe',
        '1f467-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['adult'],
      u: '1f9d1',
      v: [
        '1f9d1-1f3fb',
        '1f9d1-1f3fc',
        '1f9d1-1f3fd',
        '1f9d1-1f3fe',
        '1f9d1-1f3ff'
      ],
      a: '5.0'
    },
    {
      n: ['person with blond hair'],
      u: '1f471',
      v: [
        '1f471-1f3fb',
        '1f471-1f3fc',
        '1f471-1f3fd',
        '1f471-1f3fe',
        '1f471-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['man'],
      u: '1f468',
      v: [
        '1f468-1f3fb',
        '1f468-1f3fc',
        '1f468-1f3fd',
        '1f468-1f3fe',
        '1f468-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['bearded person'],
      u: '1f9d4',
      v: [
        '1f9d4-1f3fb',
        '1f9d4-1f3fc',
        '1f9d4-1f3fd',
        '1f9d4-1f3fe',
        '1f9d4-1f3ff'
      ],
      a: '5.0'
    },
    {
      n: ['man: beard', 'man with beard'],
      u: '1f9d4-200d-2642-fe0f',
      v: [
        '1f9d4-1f3fb-200d-2642-fe0f',
        '1f9d4-1f3fc-200d-2642-fe0f',
        '1f9d4-1f3fd-200d-2642-fe0f',
        '1f9d4-1f3fe-200d-2642-fe0f',
        '1f9d4-1f3ff-200d-2642-fe0f'
      ],
      a: '13.1'
    },
    {
      n: ['woman: beard', 'woman with beard'],
      u: '1f9d4-200d-2640-fe0f',
      v: [
        '1f9d4-1f3fb-200d-2640-fe0f',
        '1f9d4-1f3fc-200d-2640-fe0f',
        '1f9d4-1f3fd-200d-2640-fe0f',
        '1f9d4-1f3fe-200d-2640-fe0f',
        '1f9d4-1f3ff-200d-2640-fe0f'
      ],
      a: '13.1'
    },
    {
      n: ['man: red hair', 'red haired man'],
      u: '1f468-200d-1f9b0',
      v: [
        '1f468-1f3fb-200d-1f9b0',
        '1f468-1f3fc-200d-1f9b0',
        '1f468-1f3fd-200d-1f9b0',
        '1f468-1f3fe-200d-1f9b0',
        '1f468-1f3ff-200d-1f9b0'
      ],
      a: '11.0'
    },
    {
      n: ['man: curly hair', 'curly haired man'],
      u: '1f468-200d-1f9b1',
      v: [
        '1f468-1f3fb-200d-1f9b1',
        '1f468-1f3fc-200d-1f9b1',
        '1f468-1f3fd-200d-1f9b1',
        '1f468-1f3fe-200d-1f9b1',
        '1f468-1f3ff-200d-1f9b1'
      ],
      a: '11.0'
    },
    {
      n: ['man: white hair', 'white haired man'],
      u: '1f468-200d-1f9b3',
      v: [
        '1f468-1f3fb-200d-1f9b3',
        '1f468-1f3fc-200d-1f9b3',
        '1f468-1f3fd-200d-1f9b3',
        '1f468-1f3fe-200d-1f9b3',
        '1f468-1f3ff-200d-1f9b3'
      ],
      a: '11.0'
    },
    {
      n: ['bald man', 'man: bald'],
      u: '1f468-200d-1f9b2',
      v: [
        '1f468-1f3fb-200d-1f9b2',
        '1f468-1f3fc-200d-1f9b2',
        '1f468-1f3fd-200d-1f9b2',
        '1f468-1f3fe-200d-1f9b2',
        '1f468-1f3ff-200d-1f9b2'
      ],
      a: '11.0'
    },
    {
      n: ['woman'],
      u: '1f469',
      v: [
        '1f469-1f3fb',
        '1f469-1f3fc',
        '1f469-1f3fd',
        '1f469-1f3fe',
        '1f469-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['woman: red hair', 'red haired woman'],
      u: '1f469-200d-1f9b0',
      v: [
        '1f469-1f3fb-200d-1f9b0',
        '1f469-1f3fc-200d-1f9b0',
        '1f469-1f3fd-200d-1f9b0',
        '1f469-1f3fe-200d-1f9b0',
        '1f469-1f3ff-200d-1f9b0'
      ],
      a: '11.0'
    },
    {
      n: ['person: red hair', 'red haired person'],
      u: '1f9d1-200d-1f9b0',
      v: [
        '1f9d1-1f3fb-200d-1f9b0',
        '1f9d1-1f3fc-200d-1f9b0',
        '1f9d1-1f3fd-200d-1f9b0',
        '1f9d1-1f3fe-200d-1f9b0',
        '1f9d1-1f3ff-200d-1f9b0'
      ],
      a: '12.1'
    },
    {
      n: ['woman: curly hair', 'curly haired woman'],
      u: '1f469-200d-1f9b1',
      v: [
        '1f469-1f3fb-200d-1f9b1',
        '1f469-1f3fc-200d-1f9b1',
        '1f469-1f3fd-200d-1f9b1',
        '1f469-1f3fe-200d-1f9b1',
        '1f469-1f3ff-200d-1f9b1'
      ],
      a: '11.0'
    },
    {
      n: ['person: curly hair', 'curly haired person'],
      u: '1f9d1-200d-1f9b1',
      v: [
        '1f9d1-1f3fb-200d-1f9b1',
        '1f9d1-1f3fc-200d-1f9b1',
        '1f9d1-1f3fd-200d-1f9b1',
        '1f9d1-1f3fe-200d-1f9b1',
        '1f9d1-1f3ff-200d-1f9b1'
      ],
      a: '12.1'
    },
    {
      n: ['woman: white hair', 'white haired woman'],
      u: '1f469-200d-1f9b3',
      v: [
        '1f469-1f3fb-200d-1f9b3',
        '1f469-1f3fc-200d-1f9b3',
        '1f469-1f3fd-200d-1f9b3',
        '1f469-1f3fe-200d-1f9b3',
        '1f469-1f3ff-200d-1f9b3'
      ],
      a: '11.0'
    },
    {
      n: ['person: white hair', 'white haired person'],
      u: '1f9d1-200d-1f9b3',
      v: [
        '1f9d1-1f3fb-200d-1f9b3',
        '1f9d1-1f3fc-200d-1f9b3',
        '1f9d1-1f3fd-200d-1f9b3',
        '1f9d1-1f3fe-200d-1f9b3',
        '1f9d1-1f3ff-200d-1f9b3'
      ],
      a: '12.1'
    },
    {
      n: ['bald woman', 'woman: bald'],
      u: '1f469-200d-1f9b2',
      v: [
        '1f469-1f3fb-200d-1f9b2',
        '1f469-1f3fc-200d-1f9b2',
        '1f469-1f3fd-200d-1f9b2',
        '1f469-1f3fe-200d-1f9b2',
        '1f469-1f3ff-200d-1f9b2'
      ],
      a: '11.0'
    },
    {
      n: ['bald person', 'person: bald'],
      u: '1f9d1-200d-1f9b2',
      v: [
        '1f9d1-1f3fb-200d-1f9b2',
        '1f9d1-1f3fc-200d-1f9b2',
        '1f9d1-1f3fd-200d-1f9b2',
        '1f9d1-1f3fe-200d-1f9b2',
        '1f9d1-1f3ff-200d-1f9b2'
      ],
      a: '12.1'
    },
    {
      n: ['woman: blond hair', 'blond-haired-woman'],
      u: '1f471-200d-2640-fe0f',
      v: [
        '1f471-1f3fb-200d-2640-fe0f',
        '1f471-1f3fc-200d-2640-fe0f',
        '1f471-1f3fd-200d-2640-fe0f',
        '1f471-1f3fe-200d-2640-fe0f',
        '1f471-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['man: blond hair', 'blond-haired-man'],
      u: '1f471-200d-2642-fe0f',
      v: [
        '1f471-1f3fb-200d-2642-fe0f',
        '1f471-1f3fc-200d-2642-fe0f',
        '1f471-1f3fd-200d-2642-fe0f',
        '1f471-1f3fe-200d-2642-fe0f',
        '1f471-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['older adult'],
      u: '1f9d3',
      v: [
        '1f9d3-1f3fb',
        '1f9d3-1f3fc',
        '1f9d3-1f3fd',
        '1f9d3-1f3fe',
        '1f9d3-1f3ff'
      ],
      a: '5.0'
    },
    {
      n: ['older man'],
      u: '1f474',
      v: [
        '1f474-1f3fb',
        '1f474-1f3fc',
        '1f474-1f3fd',
        '1f474-1f3fe',
        '1f474-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['older woman'],
      u: '1f475',
      v: [
        '1f475-1f3fb',
        '1f475-1f3fc',
        '1f475-1f3fd',
        '1f475-1f3fe',
        '1f475-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['person frowning'],
      u: '1f64d',
      v: [
        '1f64d-1f3fb',
        '1f64d-1f3fc',
        '1f64d-1f3fd',
        '1f64d-1f3fe',
        '1f64d-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['man frowning', 'man-frowning'],
      u: '1f64d-200d-2642-fe0f',
      v: [
        '1f64d-1f3fb-200d-2642-fe0f',
        '1f64d-1f3fc-200d-2642-fe0f',
        '1f64d-1f3fd-200d-2642-fe0f',
        '1f64d-1f3fe-200d-2642-fe0f',
        '1f64d-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman frowning', 'woman-frowning'],
      u: '1f64d-200d-2640-fe0f',
      v: [
        '1f64d-1f3fb-200d-2640-fe0f',
        '1f64d-1f3fc-200d-2640-fe0f',
        '1f64d-1f3fd-200d-2640-fe0f',
        '1f64d-1f3fe-200d-2640-fe0f',
        '1f64d-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['person with pouting face'],
      u: '1f64e',
      v: [
        '1f64e-1f3fb',
        '1f64e-1f3fc',
        '1f64e-1f3fd',
        '1f64e-1f3fe',
        '1f64e-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['man pouting', 'man-pouting'],
      u: '1f64e-200d-2642-fe0f',
      v: [
        '1f64e-1f3fb-200d-2642-fe0f',
        '1f64e-1f3fc-200d-2642-fe0f',
        '1f64e-1f3fd-200d-2642-fe0f',
        '1f64e-1f3fe-200d-2642-fe0f',
        '1f64e-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman pouting', 'woman-pouting'],
      u: '1f64e-200d-2640-fe0f',
      v: [
        '1f64e-1f3fb-200d-2640-fe0f',
        '1f64e-1f3fc-200d-2640-fe0f',
        '1f64e-1f3fd-200d-2640-fe0f',
        '1f64e-1f3fe-200d-2640-fe0f',
        '1f64e-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['no good', 'face with no good gesture'],
      u: '1f645',
      v: [
        '1f645-1f3fb',
        '1f645-1f3fc',
        '1f645-1f3fd',
        '1f645-1f3fe',
        '1f645-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['man gesturing no', 'man-gesturing-no'],
      u: '1f645-200d-2642-fe0f',
      v: [
        '1f645-1f3fb-200d-2642-fe0f',
        '1f645-1f3fc-200d-2642-fe0f',
        '1f645-1f3fd-200d-2642-fe0f',
        '1f645-1f3fe-200d-2642-fe0f',
        '1f645-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman gesturing no', 'woman-gesturing-no'],
      u: '1f645-200d-2640-fe0f',
      v: [
        '1f645-1f3fb-200d-2640-fe0f',
        '1f645-1f3fc-200d-2640-fe0f',
        '1f645-1f3fd-200d-2640-fe0f',
        '1f645-1f3fe-200d-2640-fe0f',
        '1f645-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['ok woman', 'face with ok gesture'],
      u: '1f646',
      v: [
        '1f646-1f3fb',
        '1f646-1f3fc',
        '1f646-1f3fd',
        '1f646-1f3fe',
        '1f646-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['man gesturing ok', 'man-gesturing-ok'],
      u: '1f646-200d-2642-fe0f',
      v: [
        '1f646-1f3fb-200d-2642-fe0f',
        '1f646-1f3fc-200d-2642-fe0f',
        '1f646-1f3fd-200d-2642-fe0f',
        '1f646-1f3fe-200d-2642-fe0f',
        '1f646-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman gesturing ok', 'woman-gesturing-ok'],
      u: '1f646-200d-2640-fe0f',
      v: [
        '1f646-1f3fb-200d-2640-fe0f',
        '1f646-1f3fc-200d-2640-fe0f',
        '1f646-1f3fd-200d-2640-fe0f',
        '1f646-1f3fe-200d-2640-fe0f',
        '1f646-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['information desk person'],
      u: '1f481',
      v: [
        '1f481-1f3fb',
        '1f481-1f3fc',
        '1f481-1f3fd',
        '1f481-1f3fe',
        '1f481-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['man tipping hand', 'man-tipping-hand'],
      u: '1f481-200d-2642-fe0f',
      v: [
        '1f481-1f3fb-200d-2642-fe0f',
        '1f481-1f3fc-200d-2642-fe0f',
        '1f481-1f3fd-200d-2642-fe0f',
        '1f481-1f3fe-200d-2642-fe0f',
        '1f481-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman tipping hand', 'woman-tipping-hand'],
      u: '1f481-200d-2640-fe0f',
      v: [
        '1f481-1f3fb-200d-2640-fe0f',
        '1f481-1f3fc-200d-2640-fe0f',
        '1f481-1f3fd-200d-2640-fe0f',
        '1f481-1f3fe-200d-2640-fe0f',
        '1f481-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['raising hand', 'happy person raising one hand'],
      u: '1f64b',
      v: [
        '1f64b-1f3fb',
        '1f64b-1f3fc',
        '1f64b-1f3fd',
        '1f64b-1f3fe',
        '1f64b-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['man raising hand', 'man-raising-hand'],
      u: '1f64b-200d-2642-fe0f',
      v: [
        '1f64b-1f3fb-200d-2642-fe0f',
        '1f64b-1f3fc-200d-2642-fe0f',
        '1f64b-1f3fd-200d-2642-fe0f',
        '1f64b-1f3fe-200d-2642-fe0f',
        '1f64b-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman raising hand', 'woman-raising-hand'],
      u: '1f64b-200d-2640-fe0f',
      v: [
        '1f64b-1f3fb-200d-2640-fe0f',
        '1f64b-1f3fc-200d-2640-fe0f',
        '1f64b-1f3fd-200d-2640-fe0f',
        '1f64b-1f3fe-200d-2640-fe0f',
        '1f64b-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['deaf person'],
      u: '1f9cf',
      v: [
        '1f9cf-1f3fb',
        '1f9cf-1f3fc',
        '1f9cf-1f3fd',
        '1f9cf-1f3fe',
        '1f9cf-1f3ff'
      ],
      a: '12.0'
    },
    {
      n: ['deaf man'],
      u: '1f9cf-200d-2642-fe0f',
      v: [
        '1f9cf-1f3fb-200d-2642-fe0f',
        '1f9cf-1f3fc-200d-2642-fe0f',
        '1f9cf-1f3fd-200d-2642-fe0f',
        '1f9cf-1f3fe-200d-2642-fe0f',
        '1f9cf-1f3ff-200d-2642-fe0f'
      ],
      a: '12.0'
    },
    {
      n: ['deaf woman'],
      u: '1f9cf-200d-2640-fe0f',
      v: [
        '1f9cf-1f3fb-200d-2640-fe0f',
        '1f9cf-1f3fc-200d-2640-fe0f',
        '1f9cf-1f3fd-200d-2640-fe0f',
        '1f9cf-1f3fe-200d-2640-fe0f',
        '1f9cf-1f3ff-200d-2640-fe0f'
      ],
      a: '12.0'
    },
    {
      n: ['bow', 'person bowing deeply'],
      u: '1f647',
      v: [
        '1f647-1f3fb',
        '1f647-1f3fc',
        '1f647-1f3fd',
        '1f647-1f3fe',
        '1f647-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['man bowing', 'man-bowing'],
      u: '1f647-200d-2642-fe0f',
      v: [
        '1f647-1f3fb-200d-2642-fe0f',
        '1f647-1f3fc-200d-2642-fe0f',
        '1f647-1f3fd-200d-2642-fe0f',
        '1f647-1f3fe-200d-2642-fe0f',
        '1f647-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman bowing', 'woman-bowing'],
      u: '1f647-200d-2640-fe0f',
      v: [
        '1f647-1f3fb-200d-2640-fe0f',
        '1f647-1f3fc-200d-2640-fe0f',
        '1f647-1f3fd-200d-2640-fe0f',
        '1f647-1f3fe-200d-2640-fe0f',
        '1f647-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['face palm'],
      u: '1f926',
      v: [
        '1f926-1f3fb',
        '1f926-1f3fc',
        '1f926-1f3fd',
        '1f926-1f3fe',
        '1f926-1f3ff'
      ],
      a: '3.0'
    },
    {
      n: ['man facepalming', 'man-facepalming'],
      u: '1f926-200d-2642-fe0f',
      v: [
        '1f926-1f3fb-200d-2642-fe0f',
        '1f926-1f3fc-200d-2642-fe0f',
        '1f926-1f3fd-200d-2642-fe0f',
        '1f926-1f3fe-200d-2642-fe0f',
        '1f926-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman facepalming', 'woman-facepalming'],
      u: '1f926-200d-2640-fe0f',
      v: [
        '1f926-1f3fb-200d-2640-fe0f',
        '1f926-1f3fc-200d-2640-fe0f',
        '1f926-1f3fd-200d-2640-fe0f',
        '1f926-1f3fe-200d-2640-fe0f',
        '1f926-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['shrug'],
      u: '1f937',
      v: [
        '1f937-1f3fb',
        '1f937-1f3fc',
        '1f937-1f3fd',
        '1f937-1f3fe',
        '1f937-1f3ff'
      ],
      a: '3.0'
    },
    {
      n: ['man shrugging', 'man-shrugging'],
      u: '1f937-200d-2642-fe0f',
      v: [
        '1f937-1f3fb-200d-2642-fe0f',
        '1f937-1f3fc-200d-2642-fe0f',
        '1f937-1f3fd-200d-2642-fe0f',
        '1f937-1f3fe-200d-2642-fe0f',
        '1f937-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman shrugging', 'woman-shrugging'],
      u: '1f937-200d-2640-fe0f',
      v: [
        '1f937-1f3fb-200d-2640-fe0f',
        '1f937-1f3fc-200d-2640-fe0f',
        '1f937-1f3fd-200d-2640-fe0f',
        '1f937-1f3fe-200d-2640-fe0f',
        '1f937-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['health worker'],
      u: '1f9d1-200d-2695-fe0f',
      v: [
        '1f9d1-1f3fb-200d-2695-fe0f',
        '1f9d1-1f3fc-200d-2695-fe0f',
        '1f9d1-1f3fd-200d-2695-fe0f',
        '1f9d1-1f3fe-200d-2695-fe0f',
        '1f9d1-1f3ff-200d-2695-fe0f'
      ],
      a: '12.1'
    },
    {
      n: ['male-doctor', 'man health worker'],
      u: '1f468-200d-2695-fe0f',
      v: [
        '1f468-1f3fb-200d-2695-fe0f',
        '1f468-1f3fc-200d-2695-fe0f',
        '1f468-1f3fd-200d-2695-fe0f',
        '1f468-1f3fe-200d-2695-fe0f',
        '1f468-1f3ff-200d-2695-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['female-doctor', 'woman health worker'],
      u: '1f469-200d-2695-fe0f',
      v: [
        '1f469-1f3fb-200d-2695-fe0f',
        '1f469-1f3fc-200d-2695-fe0f',
        '1f469-1f3fd-200d-2695-fe0f',
        '1f469-1f3fe-200d-2695-fe0f',
        '1f469-1f3ff-200d-2695-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['student'],
      u: '1f9d1-200d-1f393',
      v: [
        '1f9d1-1f3fb-200d-1f393',
        '1f9d1-1f3fc-200d-1f393',
        '1f9d1-1f3fd-200d-1f393',
        '1f9d1-1f3fe-200d-1f393',
        '1f9d1-1f3ff-200d-1f393'
      ],
      a: '12.1'
    },
    {
      n: ['man student', 'male-student'],
      u: '1f468-200d-1f393',
      v: [
        '1f468-1f3fb-200d-1f393',
        '1f468-1f3fc-200d-1f393',
        '1f468-1f3fd-200d-1f393',
        '1f468-1f3fe-200d-1f393',
        '1f468-1f3ff-200d-1f393'
      ],
      a: '4.0'
    },
    {
      n: ['woman student', 'female-student'],
      u: '1f469-200d-1f393',
      v: [
        '1f469-1f3fb-200d-1f393',
        '1f469-1f3fc-200d-1f393',
        '1f469-1f3fd-200d-1f393',
        '1f469-1f3fe-200d-1f393',
        '1f469-1f3ff-200d-1f393'
      ],
      a: '4.0'
    },
    {
      n: ['teacher'],
      u: '1f9d1-200d-1f3eb',
      v: [
        '1f9d1-1f3fb-200d-1f3eb',
        '1f9d1-1f3fc-200d-1f3eb',
        '1f9d1-1f3fd-200d-1f3eb',
        '1f9d1-1f3fe-200d-1f3eb',
        '1f9d1-1f3ff-200d-1f3eb'
      ],
      a: '12.1'
    },
    {
      n: ['man teacher', 'male-teacher'],
      u: '1f468-200d-1f3eb',
      v: [
        '1f468-1f3fb-200d-1f3eb',
        '1f468-1f3fc-200d-1f3eb',
        '1f468-1f3fd-200d-1f3eb',
        '1f468-1f3fe-200d-1f3eb',
        '1f468-1f3ff-200d-1f3eb'
      ],
      a: '4.0'
    },
    {
      n: ['woman teacher', 'female-teacher'],
      u: '1f469-200d-1f3eb',
      v: [
        '1f469-1f3fb-200d-1f3eb',
        '1f469-1f3fc-200d-1f3eb',
        '1f469-1f3fd-200d-1f3eb',
        '1f469-1f3fe-200d-1f3eb',
        '1f469-1f3ff-200d-1f3eb'
      ],
      a: '4.0'
    },
    {
      n: ['judge'],
      u: '1f9d1-200d-2696-fe0f',
      v: [
        '1f9d1-1f3fb-200d-2696-fe0f',
        '1f9d1-1f3fc-200d-2696-fe0f',
        '1f9d1-1f3fd-200d-2696-fe0f',
        '1f9d1-1f3fe-200d-2696-fe0f',
        '1f9d1-1f3ff-200d-2696-fe0f'
      ],
      a: '12.1'
    },
    {
      n: ['man judge', 'male-judge'],
      u: '1f468-200d-2696-fe0f',
      v: [
        '1f468-1f3fb-200d-2696-fe0f',
        '1f468-1f3fc-200d-2696-fe0f',
        '1f468-1f3fd-200d-2696-fe0f',
        '1f468-1f3fe-200d-2696-fe0f',
        '1f468-1f3ff-200d-2696-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman judge', 'female-judge'],
      u: '1f469-200d-2696-fe0f',
      v: [
        '1f469-1f3fb-200d-2696-fe0f',
        '1f469-1f3fc-200d-2696-fe0f',
        '1f469-1f3fd-200d-2696-fe0f',
        '1f469-1f3fe-200d-2696-fe0f',
        '1f469-1f3ff-200d-2696-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['farmer'],
      u: '1f9d1-200d-1f33e',
      v: [
        '1f9d1-1f3fb-200d-1f33e',
        '1f9d1-1f3fc-200d-1f33e',
        '1f9d1-1f3fd-200d-1f33e',
        '1f9d1-1f3fe-200d-1f33e',
        '1f9d1-1f3ff-200d-1f33e'
      ],
      a: '12.1'
    },
    {
      n: ['man farmer', 'male-farmer'],
      u: '1f468-200d-1f33e',
      v: [
        '1f468-1f3fb-200d-1f33e',
        '1f468-1f3fc-200d-1f33e',
        '1f468-1f3fd-200d-1f33e',
        '1f468-1f3fe-200d-1f33e',
        '1f468-1f3ff-200d-1f33e'
      ],
      a: '4.0'
    },
    {
      n: ['woman farmer', 'female-farmer'],
      u: '1f469-200d-1f33e',
      v: [
        '1f469-1f3fb-200d-1f33e',
        '1f469-1f3fc-200d-1f33e',
        '1f469-1f3fd-200d-1f33e',
        '1f469-1f3fe-200d-1f33e',
        '1f469-1f3ff-200d-1f33e'
      ],
      a: '4.0'
    },
    {
      n: ['cook'],
      u: '1f9d1-200d-1f373',
      v: [
        '1f9d1-1f3fb-200d-1f373',
        '1f9d1-1f3fc-200d-1f373',
        '1f9d1-1f3fd-200d-1f373',
        '1f9d1-1f3fe-200d-1f373',
        '1f9d1-1f3ff-200d-1f373'
      ],
      a: '12.1'
    },
    {
      n: ['man cook', 'male-cook'],
      u: '1f468-200d-1f373',
      v: [
        '1f468-1f3fb-200d-1f373',
        '1f468-1f3fc-200d-1f373',
        '1f468-1f3fd-200d-1f373',
        '1f468-1f3fe-200d-1f373',
        '1f468-1f3ff-200d-1f373'
      ],
      a: '4.0'
    },
    {
      n: ['woman cook', 'female-cook'],
      u: '1f469-200d-1f373',
      v: [
        '1f469-1f3fb-200d-1f373',
        '1f469-1f3fc-200d-1f373',
        '1f469-1f3fd-200d-1f373',
        '1f469-1f3fe-200d-1f373',
        '1f469-1f3ff-200d-1f373'
      ],
      a: '4.0'
    },
    {
      n: ['mechanic'],
      u: '1f9d1-200d-1f527',
      v: [
        '1f9d1-1f3fb-200d-1f527',
        '1f9d1-1f3fc-200d-1f527',
        '1f9d1-1f3fd-200d-1f527',
        '1f9d1-1f3fe-200d-1f527',
        '1f9d1-1f3ff-200d-1f527'
      ],
      a: '12.1'
    },
    {
      n: ['man mechanic', 'male-mechanic'],
      u: '1f468-200d-1f527',
      v: [
        '1f468-1f3fb-200d-1f527',
        '1f468-1f3fc-200d-1f527',
        '1f468-1f3fd-200d-1f527',
        '1f468-1f3fe-200d-1f527',
        '1f468-1f3ff-200d-1f527'
      ],
      a: '4.0'
    },
    {
      n: ['woman mechanic', 'female-mechanic'],
      u: '1f469-200d-1f527',
      v: [
        '1f469-1f3fb-200d-1f527',
        '1f469-1f3fc-200d-1f527',
        '1f469-1f3fd-200d-1f527',
        '1f469-1f3fe-200d-1f527',
        '1f469-1f3ff-200d-1f527'
      ],
      a: '4.0'
    },
    {
      n: ['factory worker'],
      u: '1f9d1-200d-1f3ed',
      v: [
        '1f9d1-1f3fb-200d-1f3ed',
        '1f9d1-1f3fc-200d-1f3ed',
        '1f9d1-1f3fd-200d-1f3ed',
        '1f9d1-1f3fe-200d-1f3ed',
        '1f9d1-1f3ff-200d-1f3ed'
      ],
      a: '12.1'
    },
    {
      n: ['man factory worker', 'male-factory-worker'],
      u: '1f468-200d-1f3ed',
      v: [
        '1f468-1f3fb-200d-1f3ed',
        '1f468-1f3fc-200d-1f3ed',
        '1f468-1f3fd-200d-1f3ed',
        '1f468-1f3fe-200d-1f3ed',
        '1f468-1f3ff-200d-1f3ed'
      ],
      a: '4.0'
    },
    {
      n: ['woman factory worker', 'female-factory-worker'],
      u: '1f469-200d-1f3ed',
      v: [
        '1f469-1f3fb-200d-1f3ed',
        '1f469-1f3fc-200d-1f3ed',
        '1f469-1f3fd-200d-1f3ed',
        '1f469-1f3fe-200d-1f3ed',
        '1f469-1f3ff-200d-1f3ed'
      ],
      a: '4.0'
    },
    {
      n: ['office worker'],
      u: '1f9d1-200d-1f4bc',
      v: [
        '1f9d1-1f3fb-200d-1f4bc',
        '1f9d1-1f3fc-200d-1f4bc',
        '1f9d1-1f3fd-200d-1f4bc',
        '1f9d1-1f3fe-200d-1f4bc',
        '1f9d1-1f3ff-200d-1f4bc'
      ],
      a: '12.1'
    },
    {
      n: ['man office worker', 'male-office-worker'],
      u: '1f468-200d-1f4bc',
      v: [
        '1f468-1f3fb-200d-1f4bc',
        '1f468-1f3fc-200d-1f4bc',
        '1f468-1f3fd-200d-1f4bc',
        '1f468-1f3fe-200d-1f4bc',
        '1f468-1f3ff-200d-1f4bc'
      ],
      a: '4.0'
    },
    {
      n: ['woman office worker', 'female-office-worker'],
      u: '1f469-200d-1f4bc',
      v: [
        '1f469-1f3fb-200d-1f4bc',
        '1f469-1f3fc-200d-1f4bc',
        '1f469-1f3fd-200d-1f4bc',
        '1f469-1f3fe-200d-1f4bc',
        '1f469-1f3ff-200d-1f4bc'
      ],
      a: '4.0'
    },
    {
      n: ['scientist'],
      u: '1f9d1-200d-1f52c',
      v: [
        '1f9d1-1f3fb-200d-1f52c',
        '1f9d1-1f3fc-200d-1f52c',
        '1f9d1-1f3fd-200d-1f52c',
        '1f9d1-1f3fe-200d-1f52c',
        '1f9d1-1f3ff-200d-1f52c'
      ],
      a: '12.1'
    },
    {
      n: ['man scientist', 'male-scientist'],
      u: '1f468-200d-1f52c',
      v: [
        '1f468-1f3fb-200d-1f52c',
        '1f468-1f3fc-200d-1f52c',
        '1f468-1f3fd-200d-1f52c',
        '1f468-1f3fe-200d-1f52c',
        '1f468-1f3ff-200d-1f52c'
      ],
      a: '4.0'
    },
    {
      n: ['woman scientist', 'female-scientist'],
      u: '1f469-200d-1f52c',
      v: [
        '1f469-1f3fb-200d-1f52c',
        '1f469-1f3fc-200d-1f52c',
        '1f469-1f3fd-200d-1f52c',
        '1f469-1f3fe-200d-1f52c',
        '1f469-1f3ff-200d-1f52c'
      ],
      a: '4.0'
    },
    {
      n: ['technologist'],
      u: '1f9d1-200d-1f4bb',
      v: [
        '1f9d1-1f3fb-200d-1f4bb',
        '1f9d1-1f3fc-200d-1f4bb',
        '1f9d1-1f3fd-200d-1f4bb',
        '1f9d1-1f3fe-200d-1f4bb',
        '1f9d1-1f3ff-200d-1f4bb'
      ],
      a: '12.1'
    },
    {
      n: ['man technologist', 'male-technologist'],
      u: '1f468-200d-1f4bb',
      v: [
        '1f468-1f3fb-200d-1f4bb',
        '1f468-1f3fc-200d-1f4bb',
        '1f468-1f3fd-200d-1f4bb',
        '1f468-1f3fe-200d-1f4bb',
        '1f468-1f3ff-200d-1f4bb'
      ],
      a: '4.0'
    },
    {
      n: ['woman technologist', 'female-technologist'],
      u: '1f469-200d-1f4bb',
      v: [
        '1f469-1f3fb-200d-1f4bb',
        '1f469-1f3fc-200d-1f4bb',
        '1f469-1f3fd-200d-1f4bb',
        '1f469-1f3fe-200d-1f4bb',
        '1f469-1f3ff-200d-1f4bb'
      ],
      a: '4.0'
    },
    {
      n: ['singer'],
      u: '1f9d1-200d-1f3a4',
      v: [
        '1f9d1-1f3fb-200d-1f3a4',
        '1f9d1-1f3fc-200d-1f3a4',
        '1f9d1-1f3fd-200d-1f3a4',
        '1f9d1-1f3fe-200d-1f3a4',
        '1f9d1-1f3ff-200d-1f3a4'
      ],
      a: '12.1'
    },
    {
      n: ['man singer', 'male-singer'],
      u: '1f468-200d-1f3a4',
      v: [
        '1f468-1f3fb-200d-1f3a4',
        '1f468-1f3fc-200d-1f3a4',
        '1f468-1f3fd-200d-1f3a4',
        '1f468-1f3fe-200d-1f3a4',
        '1f468-1f3ff-200d-1f3a4'
      ],
      a: '4.0'
    },
    {
      n: ['woman singer', 'female-singer'],
      u: '1f469-200d-1f3a4',
      v: [
        '1f469-1f3fb-200d-1f3a4',
        '1f469-1f3fc-200d-1f3a4',
        '1f469-1f3fd-200d-1f3a4',
        '1f469-1f3fe-200d-1f3a4',
        '1f469-1f3ff-200d-1f3a4'
      ],
      a: '4.0'
    },
    {
      n: ['artist'],
      u: '1f9d1-200d-1f3a8',
      v: [
        '1f9d1-1f3fb-200d-1f3a8',
        '1f9d1-1f3fc-200d-1f3a8',
        '1f9d1-1f3fd-200d-1f3a8',
        '1f9d1-1f3fe-200d-1f3a8',
        '1f9d1-1f3ff-200d-1f3a8'
      ],
      a: '12.1'
    },
    {
      n: ['man artist', 'male-artist'],
      u: '1f468-200d-1f3a8',
      v: [
        '1f468-1f3fb-200d-1f3a8',
        '1f468-1f3fc-200d-1f3a8',
        '1f468-1f3fd-200d-1f3a8',
        '1f468-1f3fe-200d-1f3a8',
        '1f468-1f3ff-200d-1f3a8'
      ],
      a: '4.0'
    },
    {
      n: ['woman artist', 'female-artist'],
      u: '1f469-200d-1f3a8',
      v: [
        '1f469-1f3fb-200d-1f3a8',
        '1f469-1f3fc-200d-1f3a8',
        '1f469-1f3fd-200d-1f3a8',
        '1f469-1f3fe-200d-1f3a8',
        '1f469-1f3ff-200d-1f3a8'
      ],
      a: '4.0'
    },
    {
      n: ['pilot'],
      u: '1f9d1-200d-2708-fe0f',
      v: [
        '1f9d1-1f3fb-200d-2708-fe0f',
        '1f9d1-1f3fc-200d-2708-fe0f',
        '1f9d1-1f3fd-200d-2708-fe0f',
        '1f9d1-1f3fe-200d-2708-fe0f',
        '1f9d1-1f3ff-200d-2708-fe0f'
      ],
      a: '12.1'
    },
    {
      n: ['man pilot', 'male-pilot'],
      u: '1f468-200d-2708-fe0f',
      v: [
        '1f468-1f3fb-200d-2708-fe0f',
        '1f468-1f3fc-200d-2708-fe0f',
        '1f468-1f3fd-200d-2708-fe0f',
        '1f468-1f3fe-200d-2708-fe0f',
        '1f468-1f3ff-200d-2708-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman pilot', 'female-pilot'],
      u: '1f469-200d-2708-fe0f',
      v: [
        '1f469-1f3fb-200d-2708-fe0f',
        '1f469-1f3fc-200d-2708-fe0f',
        '1f469-1f3fd-200d-2708-fe0f',
        '1f469-1f3fe-200d-2708-fe0f',
        '1f469-1f3ff-200d-2708-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['astronaut'],
      u: '1f9d1-200d-1f680',
      v: [
        '1f9d1-1f3fb-200d-1f680',
        '1f9d1-1f3fc-200d-1f680',
        '1f9d1-1f3fd-200d-1f680',
        '1f9d1-1f3fe-200d-1f680',
        '1f9d1-1f3ff-200d-1f680'
      ],
      a: '12.1'
    },
    {
      n: ['man astronaut', 'male-astronaut'],
      u: '1f468-200d-1f680',
      v: [
        '1f468-1f3fb-200d-1f680',
        '1f468-1f3fc-200d-1f680',
        '1f468-1f3fd-200d-1f680',
        '1f468-1f3fe-200d-1f680',
        '1f468-1f3ff-200d-1f680'
      ],
      a: '4.0'
    },
    {
      n: ['woman astronaut', 'female-astronaut'],
      u: '1f469-200d-1f680',
      v: [
        '1f469-1f3fb-200d-1f680',
        '1f469-1f3fc-200d-1f680',
        '1f469-1f3fd-200d-1f680',
        '1f469-1f3fe-200d-1f680',
        '1f469-1f3ff-200d-1f680'
      ],
      a: '4.0'
    },
    {
      n: ['firefighter'],
      u: '1f9d1-200d-1f692',
      v: [
        '1f9d1-1f3fb-200d-1f692',
        '1f9d1-1f3fc-200d-1f692',
        '1f9d1-1f3fd-200d-1f692',
        '1f9d1-1f3fe-200d-1f692',
        '1f9d1-1f3ff-200d-1f692'
      ],
      a: '12.1'
    },
    {
      n: ['man firefighter', 'male-firefighter'],
      u: '1f468-200d-1f692',
      v: [
        '1f468-1f3fb-200d-1f692',
        '1f468-1f3fc-200d-1f692',
        '1f468-1f3fd-200d-1f692',
        '1f468-1f3fe-200d-1f692',
        '1f468-1f3ff-200d-1f692'
      ],
      a: '4.0'
    },
    {
      n: ['woman firefighter', 'female-firefighter'],
      u: '1f469-200d-1f692',
      v: [
        '1f469-1f3fb-200d-1f692',
        '1f469-1f3fc-200d-1f692',
        '1f469-1f3fd-200d-1f692',
        '1f469-1f3fe-200d-1f692',
        '1f469-1f3ff-200d-1f692'
      ],
      a: '4.0'
    },
    {
      n: ['cop', 'police officer'],
      u: '1f46e',
      v: [
        '1f46e-1f3fb',
        '1f46e-1f3fc',
        '1f46e-1f3fd',
        '1f46e-1f3fe',
        '1f46e-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['man police officer', 'male-police-officer'],
      u: '1f46e-200d-2642-fe0f',
      v: [
        '1f46e-1f3fb-200d-2642-fe0f',
        '1f46e-1f3fc-200d-2642-fe0f',
        '1f46e-1f3fd-200d-2642-fe0f',
        '1f46e-1f3fe-200d-2642-fe0f',
        '1f46e-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman police officer', 'female-police-officer'],
      u: '1f46e-200d-2640-fe0f',
      v: [
        '1f46e-1f3fb-200d-2640-fe0f',
        '1f46e-1f3fc-200d-2640-fe0f',
        '1f46e-1f3fd-200d-2640-fe0f',
        '1f46e-1f3fe-200d-2640-fe0f',
        '1f46e-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['detective', 'sleuth or spy'],
      u: '1f575-fe0f',
      v: [
        '1f575-1f3fb',
        '1f575-1f3fc',
        '1f575-1f3fd',
        '1f575-1f3fe',
        '1f575-1f3ff'
      ],
      a: '0.7'
    },
    {
      n: ['man detective', 'male-detective'],
      u: '1f575-fe0f-200d-2642-fe0f',
      v: [
        '1f575-1f3fb-200d-2642-fe0f',
        '1f575-1f3fc-200d-2642-fe0f',
        '1f575-1f3fd-200d-2642-fe0f',
        '1f575-1f3fe-200d-2642-fe0f',
        '1f575-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman detective', 'female-detective'],
      u: '1f575-fe0f-200d-2640-fe0f',
      v: [
        '1f575-1f3fb-200d-2640-fe0f',
        '1f575-1f3fc-200d-2640-fe0f',
        '1f575-1f3fd-200d-2640-fe0f',
        '1f575-1f3fe-200d-2640-fe0f',
        '1f575-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['guardsman'],
      u: '1f482',
      v: [
        '1f482-1f3fb',
        '1f482-1f3fc',
        '1f482-1f3fd',
        '1f482-1f3fe',
        '1f482-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['man guard', 'male-guard'],
      u: '1f482-200d-2642-fe0f',
      v: [
        '1f482-1f3fb-200d-2642-fe0f',
        '1f482-1f3fc-200d-2642-fe0f',
        '1f482-1f3fd-200d-2642-fe0f',
        '1f482-1f3fe-200d-2642-fe0f',
        '1f482-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman guard', 'female-guard'],
      u: '1f482-200d-2640-fe0f',
      v: [
        '1f482-1f3fb-200d-2640-fe0f',
        '1f482-1f3fc-200d-2640-fe0f',
        '1f482-1f3fd-200d-2640-fe0f',
        '1f482-1f3fe-200d-2640-fe0f',
        '1f482-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['ninja'],
      u: '1f977',
      v: [
        '1f977-1f3fb',
        '1f977-1f3fc',
        '1f977-1f3fd',
        '1f977-1f3fe',
        '1f977-1f3ff'
      ],
      a: '13.0'
    },
    {
      n: ['construction worker'],
      u: '1f477',
      v: [
        '1f477-1f3fb',
        '1f477-1f3fc',
        '1f477-1f3fd',
        '1f477-1f3fe',
        '1f477-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['man construction worker', 'male-construction-worker'],
      u: '1f477-200d-2642-fe0f',
      v: [
        '1f477-1f3fb-200d-2642-fe0f',
        '1f477-1f3fc-200d-2642-fe0f',
        '1f477-1f3fd-200d-2642-fe0f',
        '1f477-1f3fe-200d-2642-fe0f',
        '1f477-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman construction worker', 'female-construction-worker'],
      u: '1f477-200d-2640-fe0f',
      v: [
        '1f477-1f3fb-200d-2640-fe0f',
        '1f477-1f3fc-200d-2640-fe0f',
        '1f477-1f3fd-200d-2640-fe0f',
        '1f477-1f3fe-200d-2640-fe0f',
        '1f477-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['person with crown'],
      u: '1fac5',
      v: [
        '1fac5-1f3fb',
        '1fac5-1f3fc',
        '1fac5-1f3fd',
        '1fac5-1f3fe',
        '1fac5-1f3ff'
      ],
      a: '14.0'
    },
    {
      n: ['prince'],
      u: '1f934',
      v: [
        '1f934-1f3fb',
        '1f934-1f3fc',
        '1f934-1f3fd',
        '1f934-1f3fe',
        '1f934-1f3ff'
      ],
      a: '3.0'
    },
    {
      n: ['princess'],
      u: '1f478',
      v: [
        '1f478-1f3fb',
        '1f478-1f3fc',
        '1f478-1f3fd',
        '1f478-1f3fe',
        '1f478-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['man with turban'],
      u: '1f473',
      v: [
        '1f473-1f3fb',
        '1f473-1f3fc',
        '1f473-1f3fd',
        '1f473-1f3fe',
        '1f473-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['man wearing turban', 'man-wearing-turban'],
      u: '1f473-200d-2642-fe0f',
      v: [
        '1f473-1f3fb-200d-2642-fe0f',
        '1f473-1f3fc-200d-2642-fe0f',
        '1f473-1f3fd-200d-2642-fe0f',
        '1f473-1f3fe-200d-2642-fe0f',
        '1f473-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman wearing turban', 'woman-wearing-turban'],
      u: '1f473-200d-2640-fe0f',
      v: [
        '1f473-1f3fb-200d-2640-fe0f',
        '1f473-1f3fc-200d-2640-fe0f',
        '1f473-1f3fd-200d-2640-fe0f',
        '1f473-1f3fe-200d-2640-fe0f',
        '1f473-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['man with gua pi mao'],
      u: '1f472',
      v: [
        '1f472-1f3fb',
        '1f472-1f3fc',
        '1f472-1f3fd',
        '1f472-1f3fe',
        '1f472-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['person with headscarf'],
      u: '1f9d5',
      v: [
        '1f9d5-1f3fb',
        '1f9d5-1f3fc',
        '1f9d5-1f3fd',
        '1f9d5-1f3fe',
        '1f9d5-1f3ff'
      ],
      a: '5.0'
    },
    {
      n: ['man in tuxedo', 'person in tuxedo'],
      u: '1f935',
      v: [
        '1f935-1f3fb',
        '1f935-1f3fc',
        '1f935-1f3fd',
        '1f935-1f3fe',
        '1f935-1f3ff'
      ],
      a: '3.0'
    },
    {
      n: ['man in tuxedo'],
      u: '1f935-200d-2642-fe0f',
      v: [
        '1f935-1f3fb-200d-2642-fe0f',
        '1f935-1f3fc-200d-2642-fe0f',
        '1f935-1f3fd-200d-2642-fe0f',
        '1f935-1f3fe-200d-2642-fe0f',
        '1f935-1f3ff-200d-2642-fe0f'
      ],
      a: '13.0'
    },
    {
      n: ['woman in tuxedo'],
      u: '1f935-200d-2640-fe0f',
      v: [
        '1f935-1f3fb-200d-2640-fe0f',
        '1f935-1f3fc-200d-2640-fe0f',
        '1f935-1f3fd-200d-2640-fe0f',
        '1f935-1f3fe-200d-2640-fe0f',
        '1f935-1f3ff-200d-2640-fe0f'
      ],
      a: '13.0'
    },
    {
      n: ['bride with veil'],
      u: '1f470',
      v: [
        '1f470-1f3fb',
        '1f470-1f3fc',
        '1f470-1f3fd',
        '1f470-1f3fe',
        '1f470-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['man with veil'],
      u: '1f470-200d-2642-fe0f',
      v: [
        '1f470-1f3fb-200d-2642-fe0f',
        '1f470-1f3fc-200d-2642-fe0f',
        '1f470-1f3fd-200d-2642-fe0f',
        '1f470-1f3fe-200d-2642-fe0f',
        '1f470-1f3ff-200d-2642-fe0f'
      ],
      a: '13.0'
    },
    {
      n: ['woman with veil'],
      u: '1f470-200d-2640-fe0f',
      v: [
        '1f470-1f3fb-200d-2640-fe0f',
        '1f470-1f3fc-200d-2640-fe0f',
        '1f470-1f3fd-200d-2640-fe0f',
        '1f470-1f3fe-200d-2640-fe0f',
        '1f470-1f3ff-200d-2640-fe0f'
      ],
      a: '13.0'
    },
    {
      n: ['pregnant woman'],
      u: '1f930',
      v: [
        '1f930-1f3fb',
        '1f930-1f3fc',
        '1f930-1f3fd',
        '1f930-1f3fe',
        '1f930-1f3ff'
      ],
      a: '3.0'
    },
    {
      n: ['pregnant man'],
      u: '1fac3',
      v: [
        '1fac3-1f3fb',
        '1fac3-1f3fc',
        '1fac3-1f3fd',
        '1fac3-1f3fe',
        '1fac3-1f3ff'
      ],
      a: '14.0'
    },
    {
      n: ['pregnant person'],
      u: '1fac4',
      v: [
        '1fac4-1f3fb',
        '1fac4-1f3fc',
        '1fac4-1f3fd',
        '1fac4-1f3fe',
        '1fac4-1f3ff'
      ],
      a: '14.0'
    },
    {
      n: ['breast-feeding'],
      u: '1f931',
      v: [
        '1f931-1f3fb',
        '1f931-1f3fc',
        '1f931-1f3fd',
        '1f931-1f3fe',
        '1f931-1f3ff'
      ],
      a: '5.0'
    },
    {
      n: ['woman feeding baby'],
      u: '1f469-200d-1f37c',
      v: [
        '1f469-1f3fb-200d-1f37c',
        '1f469-1f3fc-200d-1f37c',
        '1f469-1f3fd-200d-1f37c',
        '1f469-1f3fe-200d-1f37c',
        '1f469-1f3ff-200d-1f37c'
      ],
      a: '13.0'
    },
    {
      n: ['man feeding baby'],
      u: '1f468-200d-1f37c',
      v: [
        '1f468-1f3fb-200d-1f37c',
        '1f468-1f3fc-200d-1f37c',
        '1f468-1f3fd-200d-1f37c',
        '1f468-1f3fe-200d-1f37c',
        '1f468-1f3ff-200d-1f37c'
      ],
      a: '13.0'
    },
    {
      n: ['person feeding baby'],
      u: '1f9d1-200d-1f37c',
      v: [
        '1f9d1-1f3fb-200d-1f37c',
        '1f9d1-1f3fc-200d-1f37c',
        '1f9d1-1f3fd-200d-1f37c',
        '1f9d1-1f3fe-200d-1f37c',
        '1f9d1-1f3ff-200d-1f37c'
      ],
      a: '13.0'
    },
    {
      n: ['angel', 'baby angel'],
      u: '1f47c',
      v: [
        '1f47c-1f3fb',
        '1f47c-1f3fc',
        '1f47c-1f3fd',
        '1f47c-1f3fe',
        '1f47c-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['santa', 'father christmas'],
      u: '1f385',
      v: [
        '1f385-1f3fb',
        '1f385-1f3fc',
        '1f385-1f3fd',
        '1f385-1f3fe',
        '1f385-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['mrs claus', 'mother christmas'],
      u: '1f936',
      v: [
        '1f936-1f3fb',
        '1f936-1f3fc',
        '1f936-1f3fd',
        '1f936-1f3fe',
        '1f936-1f3ff'
      ],
      a: '3.0'
    },
    {
      n: ['mx claus'],
      u: '1f9d1-200d-1f384',
      v: [
        '1f9d1-1f3fb-200d-1f384',
        '1f9d1-1f3fc-200d-1f384',
        '1f9d1-1f3fd-200d-1f384',
        '1f9d1-1f3fe-200d-1f384',
        '1f9d1-1f3ff-200d-1f384'
      ],
      a: '13.0'
    },
    {
      n: ['superhero'],
      u: '1f9b8',
      v: [
        '1f9b8-1f3fb',
        '1f9b8-1f3fc',
        '1f9b8-1f3fd',
        '1f9b8-1f3fe',
        '1f9b8-1f3ff'
      ],
      a: '11.0'
    },
    {
      n: ['man superhero', 'male superhero'],
      u: '1f9b8-200d-2642-fe0f',
      v: [
        '1f9b8-1f3fb-200d-2642-fe0f',
        '1f9b8-1f3fc-200d-2642-fe0f',
        '1f9b8-1f3fd-200d-2642-fe0f',
        '1f9b8-1f3fe-200d-2642-fe0f',
        '1f9b8-1f3ff-200d-2642-fe0f'
      ],
      a: '11.0'
    },
    {
      n: ['woman superhero', 'female superhero'],
      u: '1f9b8-200d-2640-fe0f',
      v: [
        '1f9b8-1f3fb-200d-2640-fe0f',
        '1f9b8-1f3fc-200d-2640-fe0f',
        '1f9b8-1f3fd-200d-2640-fe0f',
        '1f9b8-1f3fe-200d-2640-fe0f',
        '1f9b8-1f3ff-200d-2640-fe0f'
      ],
      a: '11.0'
    },
    {
      n: ['supervillain'],
      u: '1f9b9',
      v: [
        '1f9b9-1f3fb',
        '1f9b9-1f3fc',
        '1f9b9-1f3fd',
        '1f9b9-1f3fe',
        '1f9b9-1f3ff'
      ],
      a: '11.0'
    },
    {
      n: ['man supervillain', 'male supervillain'],
      u: '1f9b9-200d-2642-fe0f',
      v: [
        '1f9b9-1f3fb-200d-2642-fe0f',
        '1f9b9-1f3fc-200d-2642-fe0f',
        '1f9b9-1f3fd-200d-2642-fe0f',
        '1f9b9-1f3fe-200d-2642-fe0f',
        '1f9b9-1f3ff-200d-2642-fe0f'
      ],
      a: '11.0'
    },
    {
      n: ['woman supervillain', 'female supervillain'],
      u: '1f9b9-200d-2640-fe0f',
      v: [
        '1f9b9-1f3fb-200d-2640-fe0f',
        '1f9b9-1f3fc-200d-2640-fe0f',
        '1f9b9-1f3fd-200d-2640-fe0f',
        '1f9b9-1f3fe-200d-2640-fe0f',
        '1f9b9-1f3ff-200d-2640-fe0f'
      ],
      a: '11.0'
    },
    {
      n: ['mage'],
      u: '1f9d9',
      v: [
        '1f9d9-1f3fb',
        '1f9d9-1f3fc',
        '1f9d9-1f3fd',
        '1f9d9-1f3fe',
        '1f9d9-1f3ff'
      ],
      a: '5.0'
    },
    {
      n: ['man mage', 'male mage'],
      u: '1f9d9-200d-2642-fe0f',
      v: [
        '1f9d9-1f3fb-200d-2642-fe0f',
        '1f9d9-1f3fc-200d-2642-fe0f',
        '1f9d9-1f3fd-200d-2642-fe0f',
        '1f9d9-1f3fe-200d-2642-fe0f',
        '1f9d9-1f3ff-200d-2642-fe0f'
      ],
      a: '5.0'
    },
    {
      n: ['woman mage', 'female mage'],
      u: '1f9d9-200d-2640-fe0f',
      v: [
        '1f9d9-1f3fb-200d-2640-fe0f',
        '1f9d9-1f3fc-200d-2640-fe0f',
        '1f9d9-1f3fd-200d-2640-fe0f',
        '1f9d9-1f3fe-200d-2640-fe0f',
        '1f9d9-1f3ff-200d-2640-fe0f'
      ],
      a: '5.0'
    },
    {
      n: ['fairy'],
      u: '1f9da',
      v: [
        '1f9da-1f3fb',
        '1f9da-1f3fc',
        '1f9da-1f3fd',
        '1f9da-1f3fe',
        '1f9da-1f3ff'
      ],
      a: '5.0'
    },
    {
      n: ['man fairy', 'male fairy'],
      u: '1f9da-200d-2642-fe0f',
      v: [
        '1f9da-1f3fb-200d-2642-fe0f',
        '1f9da-1f3fc-200d-2642-fe0f',
        '1f9da-1f3fd-200d-2642-fe0f',
        '1f9da-1f3fe-200d-2642-fe0f',
        '1f9da-1f3ff-200d-2642-fe0f'
      ],
      a: '5.0'
    },
    {
      n: ['woman fairy', 'female fairy'],
      u: '1f9da-200d-2640-fe0f',
      v: [
        '1f9da-1f3fb-200d-2640-fe0f',
        '1f9da-1f3fc-200d-2640-fe0f',
        '1f9da-1f3fd-200d-2640-fe0f',
        '1f9da-1f3fe-200d-2640-fe0f',
        '1f9da-1f3ff-200d-2640-fe0f'
      ],
      a: '5.0'
    },
    {
      n: ['vampire'],
      u: '1f9db',
      v: [
        '1f9db-1f3fb',
        '1f9db-1f3fc',
        '1f9db-1f3fd',
        '1f9db-1f3fe',
        '1f9db-1f3ff'
      ],
      a: '5.0'
    },
    {
      n: ['man vampire', 'male vampire'],
      u: '1f9db-200d-2642-fe0f',
      v: [
        '1f9db-1f3fb-200d-2642-fe0f',
        '1f9db-1f3fc-200d-2642-fe0f',
        '1f9db-1f3fd-200d-2642-fe0f',
        '1f9db-1f3fe-200d-2642-fe0f',
        '1f9db-1f3ff-200d-2642-fe0f'
      ],
      a: '5.0'
    },
    {
      n: ['woman vampire', 'female vampire'],
      u: '1f9db-200d-2640-fe0f',
      v: [
        '1f9db-1f3fb-200d-2640-fe0f',
        '1f9db-1f3fc-200d-2640-fe0f',
        '1f9db-1f3fd-200d-2640-fe0f',
        '1f9db-1f3fe-200d-2640-fe0f',
        '1f9db-1f3ff-200d-2640-fe0f'
      ],
      a: '5.0'
    },
    {
      n: ['merperson'],
      u: '1f9dc',
      v: [
        '1f9dc-1f3fb',
        '1f9dc-1f3fc',
        '1f9dc-1f3fd',
        '1f9dc-1f3fe',
        '1f9dc-1f3ff'
      ],
      a: '5.0'
    },
    {
      n: ['merman'],
      u: '1f9dc-200d-2642-fe0f',
      v: [
        '1f9dc-1f3fb-200d-2642-fe0f',
        '1f9dc-1f3fc-200d-2642-fe0f',
        '1f9dc-1f3fd-200d-2642-fe0f',
        '1f9dc-1f3fe-200d-2642-fe0f',
        '1f9dc-1f3ff-200d-2642-fe0f'
      ],
      a: '5.0'
    },
    {
      n: ['mermaid'],
      u: '1f9dc-200d-2640-fe0f',
      v: [
        '1f9dc-1f3fb-200d-2640-fe0f',
        '1f9dc-1f3fc-200d-2640-fe0f',
        '1f9dc-1f3fd-200d-2640-fe0f',
        '1f9dc-1f3fe-200d-2640-fe0f',
        '1f9dc-1f3ff-200d-2640-fe0f'
      ],
      a: '5.0'
    },
    {
      n: ['elf'],
      u: '1f9dd',
      v: [
        '1f9dd-1f3fb',
        '1f9dd-1f3fc',
        '1f9dd-1f3fd',
        '1f9dd-1f3fe',
        '1f9dd-1f3ff'
      ],
      a: '5.0'
    },
    {
      n: ['man elf', 'male elf'],
      u: '1f9dd-200d-2642-fe0f',
      v: [
        '1f9dd-1f3fb-200d-2642-fe0f',
        '1f9dd-1f3fc-200d-2642-fe0f',
        '1f9dd-1f3fd-200d-2642-fe0f',
        '1f9dd-1f3fe-200d-2642-fe0f',
        '1f9dd-1f3ff-200d-2642-fe0f'
      ],
      a: '5.0'
    },
    {
      n: ['woman elf', 'female elf'],
      u: '1f9dd-200d-2640-fe0f',
      v: [
        '1f9dd-1f3fb-200d-2640-fe0f',
        '1f9dd-1f3fc-200d-2640-fe0f',
        '1f9dd-1f3fd-200d-2640-fe0f',
        '1f9dd-1f3fe-200d-2640-fe0f',
        '1f9dd-1f3ff-200d-2640-fe0f'
      ],
      a: '5.0'
    },
    {
      n: ['genie'],
      u: '1f9de',
      a: '5.0'
    },
    {
      n: ['man genie', 'male genie'],
      u: '1f9de-200d-2642-fe0f',
      a: '5.0'
    },
    {
      n: ['woman genie', 'female genie'],
      u: '1f9de-200d-2640-fe0f',
      a: '5.0'
    },
    {
      n: ['zombie'],
      u: '1f9df',
      a: '5.0'
    },
    {
      n: ['man zombie', 'male zombie'],
      u: '1f9df-200d-2642-fe0f',
      a: '5.0'
    },
    {
      n: ['woman zombie', 'female zombie'],
      u: '1f9df-200d-2640-fe0f',
      a: '5.0'
    },
    {
      n: ['troll'],
      u: '1f9cc',
      a: '14.0'
    },
    {
      n: ['massage', 'face massage'],
      u: '1f486',
      v: [
        '1f486-1f3fb',
        '1f486-1f3fc',
        '1f486-1f3fd',
        '1f486-1f3fe',
        '1f486-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['man getting massage', 'man-getting-massage'],
      u: '1f486-200d-2642-fe0f',
      v: [
        '1f486-1f3fb-200d-2642-fe0f',
        '1f486-1f3fc-200d-2642-fe0f',
        '1f486-1f3fd-200d-2642-fe0f',
        '1f486-1f3fe-200d-2642-fe0f',
        '1f486-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman getting massage', 'woman-getting-massage'],
      u: '1f486-200d-2640-fe0f',
      v: [
        '1f486-1f3fb-200d-2640-fe0f',
        '1f486-1f3fc-200d-2640-fe0f',
        '1f486-1f3fd-200d-2640-fe0f',
        '1f486-1f3fe-200d-2640-fe0f',
        '1f486-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['haircut'],
      u: '1f487',
      v: [
        '1f487-1f3fb',
        '1f487-1f3fc',
        '1f487-1f3fd',
        '1f487-1f3fe',
        '1f487-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['man getting haircut', 'man-getting-haircut'],
      u: '1f487-200d-2642-fe0f',
      v: [
        '1f487-1f3fb-200d-2642-fe0f',
        '1f487-1f3fc-200d-2642-fe0f',
        '1f487-1f3fd-200d-2642-fe0f',
        '1f487-1f3fe-200d-2642-fe0f',
        '1f487-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman getting haircut', 'woman-getting-haircut'],
      u: '1f487-200d-2640-fe0f',
      v: [
        '1f487-1f3fb-200d-2640-fe0f',
        '1f487-1f3fc-200d-2640-fe0f',
        '1f487-1f3fd-200d-2640-fe0f',
        '1f487-1f3fe-200d-2640-fe0f',
        '1f487-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['walking', 'pedestrian'],
      u: '1f6b6',
      v: [
        '1f6b6-1f3fb',
        '1f6b6-1f3fc',
        '1f6b6-1f3fd',
        '1f6b6-1f3fe',
        '1f6b6-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['man walking', 'man-walking'],
      u: '1f6b6-200d-2642-fe0f',
      v: [
        '1f6b6-1f3fb-200d-2642-fe0f',
        '1f6b6-1f3fc-200d-2642-fe0f',
        '1f6b6-1f3fd-200d-2642-fe0f',
        '1f6b6-1f3fe-200d-2642-fe0f',
        '1f6b6-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman walking', 'woman-walking'],
      u: '1f6b6-200d-2640-fe0f',
      v: [
        '1f6b6-1f3fb-200d-2640-fe0f',
        '1f6b6-1f3fc-200d-2640-fe0f',
        '1f6b6-1f3fd-200d-2640-fe0f',
        '1f6b6-1f3fe-200d-2640-fe0f',
        '1f6b6-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['standing person'],
      u: '1f9cd',
      v: [
        '1f9cd-1f3fb',
        '1f9cd-1f3fc',
        '1f9cd-1f3fd',
        '1f9cd-1f3fe',
        '1f9cd-1f3ff'
      ],
      a: '12.0'
    },
    {
      n: ['man standing'],
      u: '1f9cd-200d-2642-fe0f',
      v: [
        '1f9cd-1f3fb-200d-2642-fe0f',
        '1f9cd-1f3fc-200d-2642-fe0f',
        '1f9cd-1f3fd-200d-2642-fe0f',
        '1f9cd-1f3fe-200d-2642-fe0f',
        '1f9cd-1f3ff-200d-2642-fe0f'
      ],
      a: '12.0'
    },
    {
      n: ['woman standing'],
      u: '1f9cd-200d-2640-fe0f',
      v: [
        '1f9cd-1f3fb-200d-2640-fe0f',
        '1f9cd-1f3fc-200d-2640-fe0f',
        '1f9cd-1f3fd-200d-2640-fe0f',
        '1f9cd-1f3fe-200d-2640-fe0f',
        '1f9cd-1f3ff-200d-2640-fe0f'
      ],
      a: '12.0'
    },
    {
      n: ['kneeling person'],
      u: '1f9ce',
      v: [
        '1f9ce-1f3fb',
        '1f9ce-1f3fc',
        '1f9ce-1f3fd',
        '1f9ce-1f3fe',
        '1f9ce-1f3ff'
      ],
      a: '12.0'
    },
    {
      n: ['man kneeling'],
      u: '1f9ce-200d-2642-fe0f',
      v: [
        '1f9ce-1f3fb-200d-2642-fe0f',
        '1f9ce-1f3fc-200d-2642-fe0f',
        '1f9ce-1f3fd-200d-2642-fe0f',
        '1f9ce-1f3fe-200d-2642-fe0f',
        '1f9ce-1f3ff-200d-2642-fe0f'
      ],
      a: '12.0'
    },
    {
      n: ['woman kneeling'],
      u: '1f9ce-200d-2640-fe0f',
      v: [
        '1f9ce-1f3fb-200d-2640-fe0f',
        '1f9ce-1f3fc-200d-2640-fe0f',
        '1f9ce-1f3fd-200d-2640-fe0f',
        '1f9ce-1f3fe-200d-2640-fe0f',
        '1f9ce-1f3ff-200d-2640-fe0f'
      ],
      a: '12.0'
    },
    {
      n: ['person with white cane', 'person with probing cane'],
      u: '1f9d1-200d-1f9af',
      v: [
        '1f9d1-1f3fb-200d-1f9af',
        '1f9d1-1f3fc-200d-1f9af',
        '1f9d1-1f3fd-200d-1f9af',
        '1f9d1-1f3fe-200d-1f9af',
        '1f9d1-1f3ff-200d-1f9af'
      ],
      a: '12.1'
    },
    {
      n: ['man with white cane', 'man with probing cane'],
      u: '1f468-200d-1f9af',
      v: [
        '1f468-1f3fb-200d-1f9af',
        '1f468-1f3fc-200d-1f9af',
        '1f468-1f3fd-200d-1f9af',
        '1f468-1f3fe-200d-1f9af',
        '1f468-1f3ff-200d-1f9af'
      ],
      a: '12.0'
    },
    {
      n: ['woman with white cane', 'woman with probing cane'],
      u: '1f469-200d-1f9af',
      v: [
        '1f469-1f3fb-200d-1f9af',
        '1f469-1f3fc-200d-1f9af',
        '1f469-1f3fd-200d-1f9af',
        '1f469-1f3fe-200d-1f9af',
        '1f469-1f3ff-200d-1f9af'
      ],
      a: '12.0'
    },
    {
      n: ['person in motorized wheelchair'],
      u: '1f9d1-200d-1f9bc',
      v: [
        '1f9d1-1f3fb-200d-1f9bc',
        '1f9d1-1f3fc-200d-1f9bc',
        '1f9d1-1f3fd-200d-1f9bc',
        '1f9d1-1f3fe-200d-1f9bc',
        '1f9d1-1f3ff-200d-1f9bc'
      ],
      a: '12.1'
    },
    {
      n: ['man in motorized wheelchair'],
      u: '1f468-200d-1f9bc',
      v: [
        '1f468-1f3fb-200d-1f9bc',
        '1f468-1f3fc-200d-1f9bc',
        '1f468-1f3fd-200d-1f9bc',
        '1f468-1f3fe-200d-1f9bc',
        '1f468-1f3ff-200d-1f9bc'
      ],
      a: '12.0'
    },
    {
      n: ['woman in motorized wheelchair'],
      u: '1f469-200d-1f9bc',
      v: [
        '1f469-1f3fb-200d-1f9bc',
        '1f469-1f3fc-200d-1f9bc',
        '1f469-1f3fd-200d-1f9bc',
        '1f469-1f3fe-200d-1f9bc',
        '1f469-1f3ff-200d-1f9bc'
      ],
      a: '12.0'
    },
    {
      n: ['person in manual wheelchair'],
      u: '1f9d1-200d-1f9bd',
      v: [
        '1f9d1-1f3fb-200d-1f9bd',
        '1f9d1-1f3fc-200d-1f9bd',
        '1f9d1-1f3fd-200d-1f9bd',
        '1f9d1-1f3fe-200d-1f9bd',
        '1f9d1-1f3ff-200d-1f9bd'
      ],
      a: '12.1'
    },
    {
      n: ['man in manual wheelchair'],
      u: '1f468-200d-1f9bd',
      v: [
        '1f468-1f3fb-200d-1f9bd',
        '1f468-1f3fc-200d-1f9bd',
        '1f468-1f3fd-200d-1f9bd',
        '1f468-1f3fe-200d-1f9bd',
        '1f468-1f3ff-200d-1f9bd'
      ],
      a: '12.0'
    },
    {
      n: ['woman in manual wheelchair'],
      u: '1f469-200d-1f9bd',
      v: [
        '1f469-1f3fb-200d-1f9bd',
        '1f469-1f3fc-200d-1f9bd',
        '1f469-1f3fd-200d-1f9bd',
        '1f469-1f3fe-200d-1f9bd',
        '1f469-1f3ff-200d-1f9bd'
      ],
      a: '12.0'
    },
    {
      n: ['runner', 'running'],
      u: '1f3c3',
      v: [
        '1f3c3-1f3fb',
        '1f3c3-1f3fc',
        '1f3c3-1f3fd',
        '1f3c3-1f3fe',
        '1f3c3-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['man running', 'man-running'],
      u: '1f3c3-200d-2642-fe0f',
      v: [
        '1f3c3-1f3fb-200d-2642-fe0f',
        '1f3c3-1f3fc-200d-2642-fe0f',
        '1f3c3-1f3fd-200d-2642-fe0f',
        '1f3c3-1f3fe-200d-2642-fe0f',
        '1f3c3-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman running', 'woman-running'],
      u: '1f3c3-200d-2640-fe0f',
      v: [
        '1f3c3-1f3fb-200d-2640-fe0f',
        '1f3c3-1f3fc-200d-2640-fe0f',
        '1f3c3-1f3fd-200d-2640-fe0f',
        '1f3c3-1f3fe-200d-2640-fe0f',
        '1f3c3-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['dancer'],
      u: '1f483',
      v: [
        '1f483-1f3fb',
        '1f483-1f3fc',
        '1f483-1f3fd',
        '1f483-1f3fe',
        '1f483-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['man dancing'],
      u: '1f57a',
      v: [
        '1f57a-1f3fb',
        '1f57a-1f3fc',
        '1f57a-1f3fd',
        '1f57a-1f3fe',
        '1f57a-1f3ff'
      ],
      a: '3.0'
    },
    {
      n: ['person in suit levitating', 'man in business suit levitating'],
      u: '1f574-fe0f',
      v: [
        '1f574-1f3fb',
        '1f574-1f3fc',
        '1f574-1f3fd',
        '1f574-1f3fe',
        '1f574-1f3ff'
      ],
      a: '0.7'
    },
    {
      n: ['dancers', 'woman with bunny ears'],
      u: '1f46f',
      a: '0.6'
    },
    {
      n: [
        'men with bunny ears',
        'men-with-bunny-ears-partying',
        'man-with-bunny-ears-partying'
      ],
      u: '1f46f-200d-2642-fe0f',
      a: '4.0'
    },
    {
      n: [
        'women with bunny ears',
        'women-with-bunny-ears-partying',
        'woman-with-bunny-ears-partying'
      ],
      u: '1f46f-200d-2640-fe0f',
      a: '4.0'
    },
    {
      n: ['person in steamy room'],
      u: '1f9d6',
      v: [
        '1f9d6-1f3fb',
        '1f9d6-1f3fc',
        '1f9d6-1f3fd',
        '1f9d6-1f3fe',
        '1f9d6-1f3ff'
      ],
      a: '5.0'
    },
    {
      n: ['man in steamy room'],
      u: '1f9d6-200d-2642-fe0f',
      v: [
        '1f9d6-1f3fb-200d-2642-fe0f',
        '1f9d6-1f3fc-200d-2642-fe0f',
        '1f9d6-1f3fd-200d-2642-fe0f',
        '1f9d6-1f3fe-200d-2642-fe0f',
        '1f9d6-1f3ff-200d-2642-fe0f'
      ],
      a: '5.0'
    },
    {
      n: ['woman in steamy room'],
      u: '1f9d6-200d-2640-fe0f',
      v: [
        '1f9d6-1f3fb-200d-2640-fe0f',
        '1f9d6-1f3fc-200d-2640-fe0f',
        '1f9d6-1f3fd-200d-2640-fe0f',
        '1f9d6-1f3fe-200d-2640-fe0f',
        '1f9d6-1f3ff-200d-2640-fe0f'
      ],
      a: '5.0'
    },
    {
      n: ['person climbing'],
      u: '1f9d7',
      v: [
        '1f9d7-1f3fb',
        '1f9d7-1f3fc',
        '1f9d7-1f3fd',
        '1f9d7-1f3fe',
        '1f9d7-1f3ff'
      ],
      a: '5.0'
    },
    {
      n: ['man climbing'],
      u: '1f9d7-200d-2642-fe0f',
      v: [
        '1f9d7-1f3fb-200d-2642-fe0f',
        '1f9d7-1f3fc-200d-2642-fe0f',
        '1f9d7-1f3fd-200d-2642-fe0f',
        '1f9d7-1f3fe-200d-2642-fe0f',
        '1f9d7-1f3ff-200d-2642-fe0f'
      ],
      a: '5.0'
    },
    {
      n: ['woman climbing'],
      u: '1f9d7-200d-2640-fe0f',
      v: [
        '1f9d7-1f3fb-200d-2640-fe0f',
        '1f9d7-1f3fc-200d-2640-fe0f',
        '1f9d7-1f3fd-200d-2640-fe0f',
        '1f9d7-1f3fe-200d-2640-fe0f',
        '1f9d7-1f3ff-200d-2640-fe0f'
      ],
      a: '5.0'
    },
    {
      n: ['fencer'],
      u: '1f93a',
      a: '3.0'
    },
    {
      n: ['horse racing'],
      u: '1f3c7',
      v: [
        '1f3c7-1f3fb',
        '1f3c7-1f3fc',
        '1f3c7-1f3fd',
        '1f3c7-1f3fe',
        '1f3c7-1f3ff'
      ],
      a: '1.0'
    },
    {
      n: ['skier'],
      u: '26f7-fe0f',
      a: '0.7'
    },
    {
      n: ['snowboarder'],
      u: '1f3c2',
      v: [
        '1f3c2-1f3fb',
        '1f3c2-1f3fc',
        '1f3c2-1f3fd',
        '1f3c2-1f3fe',
        '1f3c2-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['golfer', 'person golfing'],
      u: '1f3cc-fe0f',
      v: [
        '1f3cc-1f3fb',
        '1f3cc-1f3fc',
        '1f3cc-1f3fd',
        '1f3cc-1f3fe',
        '1f3cc-1f3ff'
      ],
      a: '0.7'
    },
    {
      n: ['man golfing', 'man-golfing'],
      u: '1f3cc-fe0f-200d-2642-fe0f',
      v: [
        '1f3cc-1f3fb-200d-2642-fe0f',
        '1f3cc-1f3fc-200d-2642-fe0f',
        '1f3cc-1f3fd-200d-2642-fe0f',
        '1f3cc-1f3fe-200d-2642-fe0f',
        '1f3cc-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman golfing', 'woman-golfing'],
      u: '1f3cc-fe0f-200d-2640-fe0f',
      v: [
        '1f3cc-1f3fb-200d-2640-fe0f',
        '1f3cc-1f3fc-200d-2640-fe0f',
        '1f3cc-1f3fd-200d-2640-fe0f',
        '1f3cc-1f3fe-200d-2640-fe0f',
        '1f3cc-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['surfer'],
      u: '1f3c4',
      v: [
        '1f3c4-1f3fb',
        '1f3c4-1f3fc',
        '1f3c4-1f3fd',
        '1f3c4-1f3fe',
        '1f3c4-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['man surfing', 'man-surfing'],
      u: '1f3c4-200d-2642-fe0f',
      v: [
        '1f3c4-1f3fb-200d-2642-fe0f',
        '1f3c4-1f3fc-200d-2642-fe0f',
        '1f3c4-1f3fd-200d-2642-fe0f',
        '1f3c4-1f3fe-200d-2642-fe0f',
        '1f3c4-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman surfing', 'woman-surfing'],
      u: '1f3c4-200d-2640-fe0f',
      v: [
        '1f3c4-1f3fb-200d-2640-fe0f',
        '1f3c4-1f3fc-200d-2640-fe0f',
        '1f3c4-1f3fd-200d-2640-fe0f',
        '1f3c4-1f3fe-200d-2640-fe0f',
        '1f3c4-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['rowboat'],
      u: '1f6a3',
      v: [
        '1f6a3-1f3fb',
        '1f6a3-1f3fc',
        '1f6a3-1f3fd',
        '1f6a3-1f3fe',
        '1f6a3-1f3ff'
      ],
      a: '1.0'
    },
    {
      n: ['man rowing boat', 'man-rowing-boat'],
      u: '1f6a3-200d-2642-fe0f',
      v: [
        '1f6a3-1f3fb-200d-2642-fe0f',
        '1f6a3-1f3fc-200d-2642-fe0f',
        '1f6a3-1f3fd-200d-2642-fe0f',
        '1f6a3-1f3fe-200d-2642-fe0f',
        '1f6a3-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman rowing boat', 'woman-rowing-boat'],
      u: '1f6a3-200d-2640-fe0f',
      v: [
        '1f6a3-1f3fb-200d-2640-fe0f',
        '1f6a3-1f3fc-200d-2640-fe0f',
        '1f6a3-1f3fd-200d-2640-fe0f',
        '1f6a3-1f3fe-200d-2640-fe0f',
        '1f6a3-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['swimmer'],
      u: '1f3ca',
      v: [
        '1f3ca-1f3fb',
        '1f3ca-1f3fc',
        '1f3ca-1f3fd',
        '1f3ca-1f3fe',
        '1f3ca-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['man swimming', 'man-swimming'],
      u: '1f3ca-200d-2642-fe0f',
      v: [
        '1f3ca-1f3fb-200d-2642-fe0f',
        '1f3ca-1f3fc-200d-2642-fe0f',
        '1f3ca-1f3fd-200d-2642-fe0f',
        '1f3ca-1f3fe-200d-2642-fe0f',
        '1f3ca-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman swimming', 'woman-swimming'],
      u: '1f3ca-200d-2640-fe0f',
      v: [
        '1f3ca-1f3fb-200d-2640-fe0f',
        '1f3ca-1f3fc-200d-2640-fe0f',
        '1f3ca-1f3fd-200d-2640-fe0f',
        '1f3ca-1f3fe-200d-2640-fe0f',
        '1f3ca-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['person with ball', 'person bouncing ball'],
      u: '26f9-fe0f',
      v: ['26f9-1f3fb', '26f9-1f3fc', '26f9-1f3fd', '26f9-1f3fe', '26f9-1f3ff'],
      a: '0.7'
    },
    {
      n: ['man bouncing ball', 'man-bouncing-ball'],
      u: '26f9-fe0f-200d-2642-fe0f',
      v: [
        '26f9-1f3fb-200d-2642-fe0f',
        '26f9-1f3fc-200d-2642-fe0f',
        '26f9-1f3fd-200d-2642-fe0f',
        '26f9-1f3fe-200d-2642-fe0f',
        '26f9-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman bouncing ball', 'woman-bouncing-ball'],
      u: '26f9-fe0f-200d-2640-fe0f',
      v: [
        '26f9-1f3fb-200d-2640-fe0f',
        '26f9-1f3fc-200d-2640-fe0f',
        '26f9-1f3fd-200d-2640-fe0f',
        '26f9-1f3fe-200d-2640-fe0f',
        '26f9-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['weight lifter', 'person lifting weights'],
      u: '1f3cb-fe0f',
      v: [
        '1f3cb-1f3fb',
        '1f3cb-1f3fc',
        '1f3cb-1f3fd',
        '1f3cb-1f3fe',
        '1f3cb-1f3ff'
      ],
      a: '0.7'
    },
    {
      n: ['man lifting weights', 'man-lifting-weights'],
      u: '1f3cb-fe0f-200d-2642-fe0f',
      v: [
        '1f3cb-1f3fb-200d-2642-fe0f',
        '1f3cb-1f3fc-200d-2642-fe0f',
        '1f3cb-1f3fd-200d-2642-fe0f',
        '1f3cb-1f3fe-200d-2642-fe0f',
        '1f3cb-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman lifting weights', 'woman-lifting-weights'],
      u: '1f3cb-fe0f-200d-2640-fe0f',
      v: [
        '1f3cb-1f3fb-200d-2640-fe0f',
        '1f3cb-1f3fc-200d-2640-fe0f',
        '1f3cb-1f3fd-200d-2640-fe0f',
        '1f3cb-1f3fe-200d-2640-fe0f',
        '1f3cb-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['bicyclist'],
      u: '1f6b4',
      v: [
        '1f6b4-1f3fb',
        '1f6b4-1f3fc',
        '1f6b4-1f3fd',
        '1f6b4-1f3fe',
        '1f6b4-1f3ff'
      ],
      a: '1.0'
    },
    {
      n: ['man biking', 'man-biking'],
      u: '1f6b4-200d-2642-fe0f',
      v: [
        '1f6b4-1f3fb-200d-2642-fe0f',
        '1f6b4-1f3fc-200d-2642-fe0f',
        '1f6b4-1f3fd-200d-2642-fe0f',
        '1f6b4-1f3fe-200d-2642-fe0f',
        '1f6b4-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman biking', 'woman-biking'],
      u: '1f6b4-200d-2640-fe0f',
      v: [
        '1f6b4-1f3fb-200d-2640-fe0f',
        '1f6b4-1f3fc-200d-2640-fe0f',
        '1f6b4-1f3fd-200d-2640-fe0f',
        '1f6b4-1f3fe-200d-2640-fe0f',
        '1f6b4-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['mountain bicyclist'],
      u: '1f6b5',
      v: [
        '1f6b5-1f3fb',
        '1f6b5-1f3fc',
        '1f6b5-1f3fd',
        '1f6b5-1f3fe',
        '1f6b5-1f3ff'
      ],
      a: '1.0'
    },
    {
      n: ['man mountain biking', 'man-mountain-biking'],
      u: '1f6b5-200d-2642-fe0f',
      v: [
        '1f6b5-1f3fb-200d-2642-fe0f',
        '1f6b5-1f3fc-200d-2642-fe0f',
        '1f6b5-1f3fd-200d-2642-fe0f',
        '1f6b5-1f3fe-200d-2642-fe0f',
        '1f6b5-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman mountain biking', 'woman-mountain-biking'],
      u: '1f6b5-200d-2640-fe0f',
      v: [
        '1f6b5-1f3fb-200d-2640-fe0f',
        '1f6b5-1f3fc-200d-2640-fe0f',
        '1f6b5-1f3fd-200d-2640-fe0f',
        '1f6b5-1f3fe-200d-2640-fe0f',
        '1f6b5-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['person doing cartwheel'],
      u: '1f938',
      v: [
        '1f938-1f3fb',
        '1f938-1f3fc',
        '1f938-1f3fd',
        '1f938-1f3fe',
        '1f938-1f3ff'
      ],
      a: '3.0'
    },
    {
      n: ['man cartwheeling', 'man-cartwheeling'],
      u: '1f938-200d-2642-fe0f',
      v: [
        '1f938-1f3fb-200d-2642-fe0f',
        '1f938-1f3fc-200d-2642-fe0f',
        '1f938-1f3fd-200d-2642-fe0f',
        '1f938-1f3fe-200d-2642-fe0f',
        '1f938-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman cartwheeling', 'woman-cartwheeling'],
      u: '1f938-200d-2640-fe0f',
      v: [
        '1f938-1f3fb-200d-2640-fe0f',
        '1f938-1f3fc-200d-2640-fe0f',
        '1f938-1f3fd-200d-2640-fe0f',
        '1f938-1f3fe-200d-2640-fe0f',
        '1f938-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['wrestlers'],
      u: '1f93c',
      a: '3.0'
    },
    {
      n: ['men wrestling', 'man-wrestling'],
      u: '1f93c-200d-2642-fe0f',
      a: '4.0'
    },
    {
      n: ['women wrestling', 'woman-wrestling'],
      u: '1f93c-200d-2640-fe0f',
      a: '4.0'
    },
    {
      n: ['water polo'],
      u: '1f93d',
      v: [
        '1f93d-1f3fb',
        '1f93d-1f3fc',
        '1f93d-1f3fd',
        '1f93d-1f3fe',
        '1f93d-1f3ff'
      ],
      a: '3.0'
    },
    {
      n: ['man playing water polo', 'man-playing-water-polo'],
      u: '1f93d-200d-2642-fe0f',
      v: [
        '1f93d-1f3fb-200d-2642-fe0f',
        '1f93d-1f3fc-200d-2642-fe0f',
        '1f93d-1f3fd-200d-2642-fe0f',
        '1f93d-1f3fe-200d-2642-fe0f',
        '1f93d-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman playing water polo', 'woman-playing-water-polo'],
      u: '1f93d-200d-2640-fe0f',
      v: [
        '1f93d-1f3fb-200d-2640-fe0f',
        '1f93d-1f3fc-200d-2640-fe0f',
        '1f93d-1f3fd-200d-2640-fe0f',
        '1f93d-1f3fe-200d-2640-fe0f',
        '1f93d-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['handball'],
      u: '1f93e',
      v: [
        '1f93e-1f3fb',
        '1f93e-1f3fc',
        '1f93e-1f3fd',
        '1f93e-1f3fe',
        '1f93e-1f3ff'
      ],
      a: '3.0'
    },
    {
      n: ['man playing handball', 'man-playing-handball'],
      u: '1f93e-200d-2642-fe0f',
      v: [
        '1f93e-1f3fb-200d-2642-fe0f',
        '1f93e-1f3fc-200d-2642-fe0f',
        '1f93e-1f3fd-200d-2642-fe0f',
        '1f93e-1f3fe-200d-2642-fe0f',
        '1f93e-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman playing handball', 'woman-playing-handball'],
      u: '1f93e-200d-2640-fe0f',
      v: [
        '1f93e-1f3fb-200d-2640-fe0f',
        '1f93e-1f3fc-200d-2640-fe0f',
        '1f93e-1f3fd-200d-2640-fe0f',
        '1f93e-1f3fe-200d-2640-fe0f',
        '1f93e-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['juggling'],
      u: '1f939',
      v: [
        '1f939-1f3fb',
        '1f939-1f3fc',
        '1f939-1f3fd',
        '1f939-1f3fe',
        '1f939-1f3ff'
      ],
      a: '3.0'
    },
    {
      n: ['man juggling', 'man-juggling'],
      u: '1f939-200d-2642-fe0f',
      v: [
        '1f939-1f3fb-200d-2642-fe0f',
        '1f939-1f3fc-200d-2642-fe0f',
        '1f939-1f3fd-200d-2642-fe0f',
        '1f939-1f3fe-200d-2642-fe0f',
        '1f939-1f3ff-200d-2642-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['woman juggling', 'woman-juggling'],
      u: '1f939-200d-2640-fe0f',
      v: [
        '1f939-1f3fb-200d-2640-fe0f',
        '1f939-1f3fc-200d-2640-fe0f',
        '1f939-1f3fd-200d-2640-fe0f',
        '1f939-1f3fe-200d-2640-fe0f',
        '1f939-1f3ff-200d-2640-fe0f'
      ],
      a: '4.0'
    },
    {
      n: ['person in lotus position'],
      u: '1f9d8',
      v: [
        '1f9d8-1f3fb',
        '1f9d8-1f3fc',
        '1f9d8-1f3fd',
        '1f9d8-1f3fe',
        '1f9d8-1f3ff'
      ],
      a: '5.0'
    },
    {
      n: ['man in lotus position'],
      u: '1f9d8-200d-2642-fe0f',
      v: [
        '1f9d8-1f3fb-200d-2642-fe0f',
        '1f9d8-1f3fc-200d-2642-fe0f',
        '1f9d8-1f3fd-200d-2642-fe0f',
        '1f9d8-1f3fe-200d-2642-fe0f',
        '1f9d8-1f3ff-200d-2642-fe0f'
      ],
      a: '5.0'
    },
    {
      n: ['woman in lotus position'],
      u: '1f9d8-200d-2640-fe0f',
      v: [
        '1f9d8-1f3fb-200d-2640-fe0f',
        '1f9d8-1f3fc-200d-2640-fe0f',
        '1f9d8-1f3fd-200d-2640-fe0f',
        '1f9d8-1f3fe-200d-2640-fe0f',
        '1f9d8-1f3ff-200d-2640-fe0f'
      ],
      a: '5.0'
    },
    {
      n: ['bath'],
      u: '1f6c0',
      v: [
        '1f6c0-1f3fb',
        '1f6c0-1f3fc',
        '1f6c0-1f3fd',
        '1f6c0-1f3fe',
        '1f6c0-1f3ff'
      ],
      a: '0.6'
    },
    {
      n: ['sleeping accommodation'],
      u: '1f6cc',
      v: [
        '1f6cc-1f3fb',
        '1f6cc-1f3fc',
        '1f6cc-1f3fd',
        '1f6cc-1f3fe',
        '1f6cc-1f3ff'
      ],
      a: '1.0'
    },
    {
      n: ['people holding hands'],
      u: '1f9d1-200d-1f91d-200d-1f9d1',
      v: [
        '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb',
        '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc',
        '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd',
        '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe',
        '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff',
        '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb',
        '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc',
        '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd',
        '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe',
        '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff',
        '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb',
        '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc',
        '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd',
        '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe',
        '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff',
        '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb',
        '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc',
        '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd',
        '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe',
        '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff',
        '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb',
        '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc',
        '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd',
        '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe',
        '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff'
      ],
      a: '12.0'
    },
    {
      n: ['women holding hands', 'two women holding hands'],
      u: '1f46d',
      v: [
        '1f46d-1f3fb',
        '1f46d-1f3fc',
        '1f46d-1f3fd',
        '1f46d-1f3fe',
        '1f46d-1f3ff',
        '1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc',
        '1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd',
        '1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe',
        '1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff',
        '1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb',
        '1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd',
        '1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe',
        '1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff',
        '1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb',
        '1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc',
        '1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe',
        '1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff',
        '1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb',
        '1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc',
        '1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd',
        '1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff',
        '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb',
        '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc',
        '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd',
        '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe'
      ],
      a: '1.0'
    },
    {
      n: [
        'couple',
        'man and woman holding hands',
        'woman and man holding hands'
      ],
      u: '1f46b',
      v: [
        '1f46b-1f3fb',
        '1f46b-1f3fc',
        '1f46b-1f3fd',
        '1f46b-1f3fe',
        '1f46b-1f3ff',
        '1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc',
        '1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd',
        '1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe',
        '1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff',
        '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb',
        '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd',
        '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe',
        '1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff',
        '1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb',
        '1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc',
        '1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe',
        '1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff',
        '1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb',
        '1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc',
        '1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd',
        '1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff',
        '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb',
        '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc',
        '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd',
        '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe'
      ],
      a: '0.6'
    },
    {
      n: ['men holding hands', 'two men holding hands'],
      u: '1f46c',
      v: [
        '1f46c-1f3fb',
        '1f46c-1f3fc',
        '1f46c-1f3fd',
        '1f46c-1f3fe',
        '1f46c-1f3ff',
        '1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc',
        '1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd',
        '1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe',
        '1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff',
        '1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb',
        '1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd',
        '1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe',
        '1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff',
        '1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb',
        '1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc',
        '1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe',
        '1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff',
        '1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb',
        '1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc',
        '1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd',
        '1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff',
        '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb',
        '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc',
        '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd',
        '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe'
      ],
      a: '1.0'
    },
    {
      n: ['kiss', 'couplekiss'],
      u: '1f48f',
      v: [
        '1f48f-1f3fb',
        '1f48f-1f3fc',
        '1f48f-1f3fd',
        '1f48f-1f3fe',
        '1f48f-1f3ff',
        '1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc',
        '1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd',
        '1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe',
        '1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff',
        '1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb',
        '1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd',
        '1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe',
        '1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff',
        '1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb',
        '1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc',
        '1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe',
        '1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff',
        '1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb',
        '1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc',
        '1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd',
        '1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff',
        '1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb',
        '1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc',
        '1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd',
        '1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe'
      ],
      a: '0.6'
    },
    {
      n: ['woman-kiss-man', 'kiss: woman, man'],
      u: '1f469-200d-2764-fe0f-200d-1f48b-200d-1f468',
      v: [
        '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff'
      ],
      a: '2.0'
    },
    {
      n: ['man-kiss-man', 'kiss: man, man'],
      u: '1f468-200d-2764-fe0f-200d-1f48b-200d-1f468',
      v: [
        '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
        '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
        '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
        '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
        '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
        '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
        '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
        '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
        '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
        '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
        '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
        '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
        '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
        '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
        '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
        '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
        '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
        '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
        '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
        '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
        '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
        '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
        '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
        '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
        '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff'
      ],
      a: '2.0'
    },
    {
      n: ['woman-kiss-woman', 'kiss: woman, woman'],
      u: '1f469-200d-2764-fe0f-200d-1f48b-200d-1f469',
      v: [
        '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff'
      ],
      a: '2.0'
    },
    {
      n: ['couple with heart'],
      u: '1f491',
      v: [
        '1f491-1f3fb',
        '1f491-1f3fc',
        '1f491-1f3fd',
        '1f491-1f3fe',
        '1f491-1f3ff',
        '1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fc',
        '1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fd',
        '1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fe',
        '1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3ff',
        '1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fb',
        '1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fd',
        '1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fe',
        '1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3ff',
        '1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fb',
        '1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fc',
        '1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fe',
        '1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3ff',
        '1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fb',
        '1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fc',
        '1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fd',
        '1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3ff',
        '1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fb',
        '1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fc',
        '1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fd',
        '1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fe'
      ],
      a: '0.6'
    },
    {
      n: ['woman-heart-man', 'couple with heart: woman, man'],
      u: '1f469-200d-2764-fe0f-200d-1f468',
      v: [
        '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff'
      ],
      a: '2.0'
    },
    {
      n: ['man-heart-man', 'couple with heart: man, man'],
      u: '1f468-200d-2764-fe0f-200d-1f468',
      v: [
        '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb',
        '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc',
        '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd',
        '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe',
        '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff',
        '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb',
        '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc',
        '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd',
        '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe',
        '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff',
        '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb',
        '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc',
        '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd',
        '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe',
        '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff',
        '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb',
        '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc',
        '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd',
        '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe',
        '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff',
        '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb',
        '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc',
        '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd',
        '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe',
        '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff'
      ],
      a: '2.0'
    },
    {
      n: ['woman-heart-woman', 'couple with heart: woman, woman'],
      u: '1f469-200d-2764-fe0f-200d-1f469',
      v: [
        '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fb',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fc',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fd',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fe',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3ff',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fb',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fc',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fd',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fe',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3ff',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fb',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fc',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fd',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fe',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3ff',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fb',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fc',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fd',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fe',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3ff',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fb',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fc',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fd',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fe',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3ff'
      ],
      a: '2.0'
    },
    {
      n: ['family'],
      u: '1f46a',
      a: '0.6'
    },
    {
      n: ['man-woman-boy', 'family: man, woman, boy'],
      u: '1f468-200d-1f469-200d-1f466',
      a: '2.0'
    },
    {
      n: ['man-woman-girl', 'family: man, woman, girl'],
      u: '1f468-200d-1f469-200d-1f467',
      a: '2.0'
    },
    {
      n: ['man-woman-girl-boy', 'family: man, woman, girl, boy'],
      u: '1f468-200d-1f469-200d-1f467-200d-1f466',
      a: '2.0'
    },
    {
      n: ['man-woman-boy-boy', 'family: man, woman, boy, boy'],
      u: '1f468-200d-1f469-200d-1f466-200d-1f466',
      a: '2.0'
    },
    {
      n: ['man-woman-girl-girl', 'family: man, woman, girl, girl'],
      u: '1f468-200d-1f469-200d-1f467-200d-1f467',
      a: '2.0'
    },
    {
      n: ['man-man-boy', 'family: man, man, boy'],
      u: '1f468-200d-1f468-200d-1f466',
      a: '2.0'
    },
    {
      n: ['man-man-girl', 'family: man, man, girl'],
      u: '1f468-200d-1f468-200d-1f467',
      a: '2.0'
    },
    {
      n: ['man-man-girl-boy', 'family: man, man, girl, boy'],
      u: '1f468-200d-1f468-200d-1f467-200d-1f466',
      a: '2.0'
    },
    {
      n: ['man-man-boy-boy', 'family: man, man, boy, boy'],
      u: '1f468-200d-1f468-200d-1f466-200d-1f466',
      a: '2.0'
    },
    {
      n: ['man-man-girl-girl', 'family: man, man, girl, girl'],
      u: '1f468-200d-1f468-200d-1f467-200d-1f467',
      a: '2.0'
    },
    {
      n: ['woman-woman-boy', 'family: woman, woman, boy'],
      u: '1f469-200d-1f469-200d-1f466',
      a: '2.0'
    },
    {
      n: ['woman-woman-girl', 'family: woman, woman, girl'],
      u: '1f469-200d-1f469-200d-1f467',
      a: '2.0'
    },
    {
      n: ['woman-woman-girl-boy', 'family: woman, woman, girl, boy'],
      u: '1f469-200d-1f469-200d-1f467-200d-1f466',
      a: '2.0'
    },
    {
      n: ['woman-woman-boy-boy', 'family: woman, woman, boy, boy'],
      u: '1f469-200d-1f469-200d-1f466-200d-1f466',
      a: '2.0'
    },
    {
      n: ['woman-woman-girl-girl', 'family: woman, woman, girl, girl'],
      u: '1f469-200d-1f469-200d-1f467-200d-1f467',
      a: '2.0'
    },
    {
      n: ['man-boy', 'family: man, boy'],
      u: '1f468-200d-1f466',
      a: '4.0'
    },
    {
      n: ['man-boy-boy', 'family: man, boy, boy'],
      u: '1f468-200d-1f466-200d-1f466',
      a: '4.0'
    },
    {
      n: ['man-girl', 'family: man, girl'],
      u: '1f468-200d-1f467',
      a: '4.0'
    },
    {
      n: ['man-girl-boy', 'family: man, girl, boy'],
      u: '1f468-200d-1f467-200d-1f466',
      a: '4.0'
    },
    {
      n: ['man-girl-girl', 'family: man, girl, girl'],
      u: '1f468-200d-1f467-200d-1f467',
      a: '4.0'
    },
    {
      n: ['woman-boy', 'family: woman, boy'],
      u: '1f469-200d-1f466',
      a: '4.0'
    },
    {
      n: ['woman-boy-boy', 'family: woman, boy, boy'],
      u: '1f469-200d-1f466-200d-1f466',
      a: '4.0'
    },
    {
      n: ['woman-girl', 'family: woman, girl'],
      u: '1f469-200d-1f467',
      a: '4.0'
    },
    {
      n: ['woman-girl-boy', 'family: woman, girl, boy'],
      u: '1f469-200d-1f467-200d-1f466',
      a: '4.0'
    },
    {
      n: ['woman-girl-girl', 'family: woman, girl, girl'],
      u: '1f469-200d-1f467-200d-1f467',
      a: '4.0'
    },
    {
      n: ['speaking head', 'speaking head in silhouette'],
      u: '1f5e3-fe0f',
      a: '0.7'
    },
    {
      n: ['bust in silhouette'],
      u: '1f464',
      a: '0.6'
    },
    {
      n: ['busts in silhouette'],
      u: '1f465',
      a: '1.0'
    },
    {
      n: ['people hugging'],
      u: '1fac2',
      a: '13.0'
    },
    {
      n: ['footprints'],
      u: '1f463',
      a: '0.6'
    }
  ],
  自然生物: [
    {
      n: ['monkey face'],
      u: '1f435',
      a: '0.6'
    },
    {
      n: ['monkey'],
      u: '1f412',
      a: '0.6'
    },
    {
      n: ['gorilla'],
      u: '1f98d',
      a: '3.0'
    },
    {
      n: ['orangutan'],
      u: '1f9a7',
      a: '12.0'
    },
    {
      n: ['dog', 'dog face'],
      u: '1f436',
      a: '0.6'
    },
    {
      n: ['dog', 'dog2'],
      u: '1f415',
      a: '0.7'
    },
    {
      n: ['guide dog'],
      u: '1f9ae',
      a: '12.0'
    },
    {
      n: ['service dog'],
      u: '1f415-200d-1f9ba',
      a: '12.0'
    },
    {
      n: ['poodle'],
      u: '1f429',
      a: '0.6'
    },
    {
      n: ['wolf', 'wolf face'],
      u: '1f43a',
      a: '0.6'
    },
    {
      n: ['fox face'],
      u: '1f98a',
      a: '3.0'
    },
    {
      n: ['raccoon'],
      u: '1f99d',
      a: '11.0'
    },
    {
      n: ['cat', 'cat face'],
      u: '1f431',
      a: '0.6'
    },
    {
      n: ['cat', 'cat2'],
      u: '1f408',
      a: '0.7'
    },
    {
      n: ['black cat'],
      u: '1f408-200d-2b1b',
      a: '13.0'
    },
    {
      n: ['lion face'],
      u: '1f981',
      a: '1.0'
    },
    {
      n: ['tiger', 'tiger face'],
      u: '1f42f',
      a: '0.6'
    },
    {
      n: ['tiger', 'tiger2'],
      u: '1f405',
      a: '1.0'
    },
    {
      n: ['leopard'],
      u: '1f406',
      a: '1.0'
    },
    {
      n: ['horse', 'horse face'],
      u: '1f434',
      a: '0.6'
    },
    {
      n: ['horse', 'racehorse'],
      u: '1f40e',
      a: '0.6'
    },
    {
      n: ['unicorn face'],
      u: '1f984',
      a: '1.0'
    },
    {
      n: ['zebra face'],
      u: '1f993',
      a: '5.0'
    },
    {
      n: ['deer'],
      u: '1f98c',
      a: '3.0'
    },
    {
      n: ['bison'],
      u: '1f9ac',
      a: '13.0'
    },
    {
      n: ['cow', 'cow face'],
      u: '1f42e',
      a: '0.6'
    },
    {
      n: ['ox'],
      u: '1f402',
      a: '1.0'
    },
    {
      n: ['water buffalo'],
      u: '1f403',
      a: '1.0'
    },
    {
      n: ['cow', 'cow2'],
      u: '1f404',
      a: '1.0'
    },
    {
      n: ['pig', 'pig face'],
      u: '1f437',
      a: '0.6'
    },
    {
      n: ['pig', 'pig2'],
      u: '1f416',
      a: '1.0'
    },
    {
      n: ['boar'],
      u: '1f417',
      a: '0.6'
    },
    {
      n: ['pig nose'],
      u: '1f43d',
      a: '0.6'
    },
    {
      n: ['ram'],
      u: '1f40f',
      a: '1.0'
    },
    {
      n: ['sheep'],
      u: '1f411',
      a: '0.6'
    },
    {
      n: ['goat'],
      u: '1f410',
      a: '1.0'
    },
    {
      n: ['dromedary camel'],
      u: '1f42a',
      a: '1.0'
    },
    {
      n: ['camel', 'bactrian camel'],
      u: '1f42b',
      a: '0.6'
    },
    {
      n: ['llama'],
      u: '1f999',
      a: '11.0'
    },
    {
      n: ['giraffe face'],
      u: '1f992',
      a: '5.0'
    },
    {
      n: ['elephant'],
      u: '1f418',
      a: '0.6'
    },
    {
      n: ['mammoth'],
      u: '1f9a3',
      a: '13.0'
    },
    {
      n: ['rhinoceros'],
      u: '1f98f',
      a: '3.0'
    },
    {
      n: ['hippopotamus'],
      u: '1f99b',
      a: '11.0'
    },
    {
      n: ['mouse', 'mouse face'],
      u: '1f42d',
      a: '0.6'
    },
    {
      n: ['mouse', 'mouse2'],
      u: '1f401',
      a: '1.0'
    },
    {
      n: ['rat'],
      u: '1f400',
      a: '1.0'
    },
    {
      n: ['hamster', 'hamster face'],
      u: '1f439',
      a: '0.6'
    },
    {
      n: ['rabbit', 'rabbit face'],
      u: '1f430',
      a: '0.6'
    },
    {
      n: ['rabbit', 'rabbit2'],
      u: '1f407',
      a: '1.0'
    },
    {
      n: ['chipmunk'],
      u: '1f43f-fe0f',
      a: '0.7'
    },
    {
      n: ['beaver'],
      u: '1f9ab',
      a: '13.0'
    },
    {
      n: ['hedgehog'],
      u: '1f994',
      a: '5.0'
    },
    {
      n: ['bat'],
      u: '1f987',
      a: '3.0'
    },
    {
      n: ['bear', 'bear face'],
      u: '1f43b',
      a: '0.6'
    },
    {
      n: ['polar bear'],
      u: '1f43b-200d-2744-fe0f',
      a: '13.0'
    },
    {
      n: ['koala'],
      u: '1f428',
      a: '0.6'
    },
    {
      n: ['panda face'],
      u: '1f43c',
      a: '0.6'
    },
    {
      n: ['sloth'],
      u: '1f9a5',
      a: '12.0'
    },
    {
      n: ['otter'],
      u: '1f9a6',
      a: '12.0'
    },
    {
      n: ['skunk'],
      u: '1f9a8',
      a: '12.0'
    },
    {
      n: ['kangaroo'],
      u: '1f998',
      a: '11.0'
    },
    {
      n: ['badger'],
      u: '1f9a1',
      a: '11.0'
    },
    {
      n: ['feet', 'paw prints'],
      u: '1f43e',
      a: '0.6'
    },
    {
      n: ['turkey'],
      u: '1f983',
      a: '1.0'
    },
    {
      n: ['chicken'],
      u: '1f414',
      a: '0.6'
    },
    {
      n: ['rooster'],
      u: '1f413',
      a: '1.0'
    },
    {
      n: ['hatching chick'],
      u: '1f423',
      a: '0.6'
    },
    {
      n: ['baby chick'],
      u: '1f424',
      a: '0.6'
    },
    {
      n: ['hatched chick', 'front-facing baby chick'],
      u: '1f425',
      a: '0.6'
    },
    {
      n: ['bird'],
      u: '1f426',
      a: '0.6'
    },
    {
      n: ['penguin'],
      u: '1f427',
      a: '0.6'
    },
    {
      n: ['dove', 'dove of peace'],
      u: '1f54a-fe0f',
      a: '0.7'
    },
    {
      n: ['eagle'],
      u: '1f985',
      a: '3.0'
    },
    {
      n: ['duck'],
      u: '1f986',
      a: '3.0'
    },
    {
      n: ['swan'],
      u: '1f9a2',
      a: '11.0'
    },
    {
      n: ['owl'],
      u: '1f989',
      a: '3.0'
    },
    {
      n: ['dodo'],
      u: '1f9a4',
      a: '13.0'
    },
    {
      n: ['feather'],
      u: '1fab6',
      a: '13.0'
    },
    {
      n: ['flamingo'],
      u: '1f9a9',
      a: '12.0'
    },
    {
      n: ['peacock'],
      u: '1f99a',
      a: '11.0'
    },
    {
      n: ['parrot'],
      u: '1f99c',
      a: '11.0'
    },
    {
      n: ['frog', 'frog face'],
      u: '1f438',
      a: '0.6'
    },
    {
      n: ['crocodile'],
      u: '1f40a',
      a: '1.0'
    },
    {
      n: ['turtle'],
      u: '1f422',
      a: '0.6'
    },
    {
      n: ['lizard'],
      u: '1f98e',
      a: '3.0'
    },
    {
      n: ['snake'],
      u: '1f40d',
      a: '0.6'
    },
    {
      n: ['dragon face'],
      u: '1f432',
      a: '0.6'
    },
    {
      n: ['dragon'],
      u: '1f409',
      a: '1.0'
    },
    {
      n: ['sauropod'],
      u: '1f995',
      a: '5.0'
    },
    {
      n: ['t-rex'],
      u: '1f996',
      a: '5.0'
    },
    {
      n: ['whale', 'spouting whale'],
      u: '1f433',
      a: '0.6'
    },
    {
      n: ['whale', 'whale2'],
      u: '1f40b',
      a: '1.0'
    },
    {
      n: ['dolphin', 'flipper'],
      u: '1f42c',
      a: '0.6'
    },
    {
      n: ['seal'],
      u: '1f9ad',
      a: '13.0'
    },
    {
      n: ['fish'],
      u: '1f41f',
      a: '0.6'
    },
    {
      n: ['tropical fish'],
      u: '1f420',
      a: '0.6'
    },
    {
      n: ['blowfish'],
      u: '1f421',
      a: '0.6'
    },
    {
      n: ['shark'],
      u: '1f988',
      a: '3.0'
    },
    {
      n: ['octopus'],
      u: '1f419',
      a: '0.6'
    },
    {
      n: ['shell', 'spiral shell'],
      u: '1f41a',
      a: '0.6'
    },
    {
      n: ['coral'],
      u: '1fab8',
      a: '14.0'
    },
    {
      n: ['snail'],
      u: '1f40c',
      a: '0.6'
    },
    {
      n: ['butterfly'],
      u: '1f98b',
      a: '3.0'
    },
    {
      n: ['bug'],
      u: '1f41b',
      a: '0.6'
    },
    {
      n: ['ant'],
      u: '1f41c',
      a: '0.6'
    },
    {
      n: ['bee', 'honeybee'],
      u: '1f41d',
      a: '0.6'
    },
    {
      n: ['beetle'],
      u: '1fab2',
      a: '13.0'
    },
    {
      n: ['ladybug', 'lady beetle'],
      u: '1f41e',
      a: '0.6'
    },
    {
      n: ['cricket'],
      u: '1f997',
      a: '5.0'
    },
    {
      n: ['cockroach'],
      u: '1fab3',
      a: '13.0'
    },
    {
      n: ['spider'],
      u: '1f577-fe0f',
      a: '0.7'
    },
    {
      n: ['spider web'],
      u: '1f578-fe0f',
      a: '0.7'
    },
    {
      n: ['scorpion'],
      u: '1f982',
      a: '1.0'
    },
    {
      n: ['mosquito'],
      u: '1f99f',
      a: '11.0'
    },
    {
      n: ['fly'],
      u: '1fab0',
      a: '13.0'
    },
    {
      n: ['worm'],
      u: '1fab1',
      a: '13.0'
    },
    {
      n: ['microbe'],
      u: '1f9a0',
      a: '11.0'
    },
    {
      n: ['bouquet'],
      u: '1f490',
      a: '0.6'
    },
    {
      n: ['cherry blossom'],
      u: '1f338',
      a: '0.6'
    },
    {
      n: ['white flower'],
      u: '1f4ae',
      a: '0.6'
    },
    {
      n: ['lotus'],
      u: '1fab7',
      a: '14.0'
    },
    {
      n: ['rosette'],
      u: '1f3f5-fe0f',
      a: '0.7'
    },
    {
      n: ['rose'],
      u: '1f339',
      a: '0.6'
    },
    {
      n: ['wilted flower'],
      u: '1f940',
      a: '3.0'
    },
    {
      n: ['hibiscus'],
      u: '1f33a',
      a: '0.6'
    },
    {
      n: ['sunflower'],
      u: '1f33b',
      a: '0.6'
    },
    {
      n: ['blossom'],
      u: '1f33c',
      a: '0.6'
    },
    {
      n: ['tulip'],
      u: '1f337',
      a: '0.6'
    },
    {
      n: ['seedling'],
      u: '1f331',
      a: '0.6'
    },
    {
      n: ['potted plant'],
      u: '1fab4',
      a: '13.0'
    },
    {
      n: ['evergreen tree'],
      u: '1f332',
      a: '1.0'
    },
    {
      n: ['deciduous tree'],
      u: '1f333',
      a: '1.0'
    },
    {
      n: ['palm tree'],
      u: '1f334',
      a: '0.6'
    },
    {
      n: ['cactus'],
      u: '1f335',
      a: '0.6'
    },
    {
      n: ['ear of rice'],
      u: '1f33e',
      a: '0.6'
    },
    {
      n: ['herb'],
      u: '1f33f',
      a: '0.6'
    },
    {
      n: ['shamrock'],
      u: '2618-fe0f',
      a: '1.0'
    },
    {
      n: ['four leaf clover'],
      u: '1f340',
      a: '0.6'
    },
    {
      n: ['maple leaf'],
      u: '1f341',
      a: '0.6'
    },
    {
      n: ['fallen leaf'],
      u: '1f342',
      a: '0.6'
    },
    {
      n: ['leaves', 'leaf fluttering in wind'],
      u: '1f343',
      a: '0.6'
    },
    {
      n: ['empty nest'],
      u: '1fab9',
      a: '14.0'
    },
    {
      n: ['nest with eggs'],
      u: '1faba',
      a: '14.0'
    }
  ],
  食品: [
    {
      n: ['grapes'],
      u: '1f347',
      a: '0.6'
    },
    {
      n: ['melon'],
      u: '1f348',
      a: '0.6'
    },
    {
      n: ['watermelon'],
      u: '1f349',
      a: '0.6'
    },
    {
      n: ['tangerine'],
      u: '1f34a',
      a: '0.6'
    },
    {
      n: ['lemon'],
      u: '1f34b',
      a: '1.0'
    },
    {
      n: ['banana'],
      u: '1f34c',
      a: '0.6'
    },
    {
      n: ['pineapple'],
      u: '1f34d',
      a: '0.6'
    },
    {
      n: ['mango'],
      u: '1f96d',
      a: '11.0'
    },
    {
      n: ['apple', 'red apple'],
      u: '1f34e',
      a: '0.6'
    },
    {
      n: ['green apple'],
      u: '1f34f',
      a: '0.6'
    },
    {
      n: ['pear'],
      u: '1f350',
      a: '1.0'
    },
    {
      n: ['peach'],
      u: '1f351',
      a: '0.6'
    },
    {
      n: ['cherries'],
      u: '1f352',
      a: '0.6'
    },
    {
      n: ['strawberry'],
      u: '1f353',
      a: '0.6'
    },
    {
      n: ['blueberries'],
      u: '1fad0',
      a: '13.0'
    },
    {
      n: ['kiwifruit'],
      u: '1f95d',
      a: '3.0'
    },
    {
      n: ['tomato'],
      u: '1f345',
      a: '0.6'
    },
    {
      n: ['olive'],
      u: '1fad2',
      a: '13.0'
    },
    {
      n: ['coconut'],
      u: '1f965',
      a: '5.0'
    },
    {
      n: ['avocado'],
      u: '1f951',
      a: '3.0'
    },
    {
      n: ['eggplant', 'aubergine'],
      u: '1f346',
      a: '0.6'
    },
    {
      n: ['potato'],
      u: '1f954',
      a: '3.0'
    },
    {
      n: ['carrot'],
      u: '1f955',
      a: '3.0'
    },
    {
      n: ['corn', 'ear of maize'],
      u: '1f33d',
      a: '0.6'
    },
    {
      n: ['hot pepper'],
      u: '1f336-fe0f',
      a: '0.7'
    },
    {
      n: ['bell pepper'],
      u: '1fad1',
      a: '13.0'
    },
    {
      n: ['cucumber'],
      u: '1f952',
      a: '3.0'
    },
    {
      n: ['leafy green'],
      u: '1f96c',
      a: '11.0'
    },
    {
      n: ['broccoli'],
      u: '1f966',
      a: '5.0'
    },
    {
      n: ['garlic'],
      u: '1f9c4',
      a: '12.0'
    },
    {
      n: ['onion'],
      u: '1f9c5',
      a: '12.0'
    },
    {
      n: ['mushroom'],
      u: '1f344',
      a: '0.6'
    },
    {
      n: ['peanuts'],
      u: '1f95c',
      a: '3.0'
    },
    {
      n: ['beans'],
      u: '1fad8',
      a: '14.0'
    },
    {
      n: ['chestnut'],
      u: '1f330',
      a: '0.6'
    },
    {
      n: ['bread'],
      u: '1f35e',
      a: '0.6'
    },
    {
      n: ['croissant'],
      u: '1f950',
      a: '3.0'
    },
    {
      n: ['baguette bread'],
      u: '1f956',
      a: '3.0'
    },
    {
      n: ['flatbread'],
      u: '1fad3',
      a: '13.0'
    },
    {
      n: ['pretzel'],
      u: '1f968',
      a: '5.0'
    },
    {
      n: ['bagel'],
      u: '1f96f',
      a: '11.0'
    },
    {
      n: ['pancakes'],
      u: '1f95e',
      a: '3.0'
    },
    {
      n: ['waffle'],
      u: '1f9c7',
      a: '12.0'
    },
    {
      n: ['cheese wedge'],
      u: '1f9c0',
      a: '1.0'
    },
    {
      n: ['meat on bone'],
      u: '1f356',
      a: '0.6'
    },
    {
      n: ['poultry leg'],
      u: '1f357',
      a: '0.6'
    },
    {
      n: ['cut of meat'],
      u: '1f969',
      a: '5.0'
    },
    {
      n: ['bacon'],
      u: '1f953',
      a: '3.0'
    },
    {
      n: ['hamburger'],
      u: '1f354',
      a: '0.6'
    },
    {
      n: ['fries', 'french fries'],
      u: '1f35f',
      a: '0.6'
    },
    {
      n: ['pizza', 'slice of pizza'],
      u: '1f355',
      a: '0.6'
    },
    {
      n: ['hotdog', 'hot dog'],
      u: '1f32d',
      a: '1.0'
    },
    {
      n: ['sandwich'],
      u: '1f96a',
      a: '5.0'
    },
    {
      n: ['taco'],
      u: '1f32e',
      a: '1.0'
    },
    {
      n: ['burrito'],
      u: '1f32f',
      a: '1.0'
    },
    {
      n: ['tamale'],
      u: '1fad4',
      a: '13.0'
    },
    {
      n: ['stuffed flatbread'],
      u: '1f959',
      a: '3.0'
    },
    {
      n: ['falafel'],
      u: '1f9c6',
      a: '12.0'
    },
    {
      n: ['egg'],
      u: '1f95a',
      a: '3.0'
    },
    {
      n: ['cooking', 'fried egg'],
      u: '1f373',
      a: '0.6'
    },
    {
      n: ['shallow pan of food'],
      u: '1f958',
      a: '3.0'
    },
    {
      n: ['stew', 'pot of food'],
      u: '1f372',
      a: '0.6'
    },
    {
      n: ['fondue'],
      u: '1fad5',
      a: '13.0'
    },
    {
      n: ['bowl with spoon'],
      u: '1f963',
      a: '5.0'
    },
    {
      n: ['green salad'],
      u: '1f957',
      a: '3.0'
    },
    {
      n: ['popcorn'],
      u: '1f37f',
      a: '1.0'
    },
    {
      n: ['butter'],
      u: '1f9c8',
      a: '12.0'
    },
    {
      n: ['salt', 'salt shaker'],
      u: '1f9c2',
      a: '11.0'
    },
    {
      n: ['canned food'],
      u: '1f96b',
      a: '5.0'
    },
    {
      n: ['bento', 'bento box'],
      u: '1f371',
      a: '0.6'
    },
    {
      n: ['rice cracker'],
      u: '1f358',
      a: '0.6'
    },
    {
      n: ['rice ball'],
      u: '1f359',
      a: '0.6'
    },
    {
      n: ['rice', 'cooked rice'],
      u: '1f35a',
      a: '0.6'
    },
    {
      n: ['curry', 'curry and rice'],
      u: '1f35b',
      a: '0.6'
    },
    {
      n: ['ramen', 'steaming bowl'],
      u: '1f35c',
      a: '0.6'
    },
    {
      n: ['spaghetti'],
      u: '1f35d',
      a: '0.6'
    },
    {
      n: ['sweet potato', 'roasted sweet potato'],
      u: '1f360',
      a: '0.6'
    },
    {
      n: ['oden'],
      u: '1f362',
      a: '0.6'
    },
    {
      n: ['sushi'],
      u: '1f363',
      a: '0.6'
    },
    {
      n: ['fried shrimp'],
      u: '1f364',
      a: '0.6'
    },
    {
      n: ['fish cake', 'fish cake with swirl design'],
      u: '1f365',
      a: '0.6'
    },
    {
      n: ['moon cake'],
      u: '1f96e',
      a: '11.0'
    },
    {
      n: ['dango'],
      u: '1f361',
      a: '0.6'
    },
    {
      n: ['dumpling'],
      u: '1f95f',
      a: '5.0'
    },
    {
      n: ['fortune cookie'],
      u: '1f960',
      a: '5.0'
    },
    {
      n: ['takeout box'],
      u: '1f961',
      a: '5.0'
    },
    {
      n: ['crab'],
      u: '1f980',
      a: '1.0'
    },
    {
      n: ['lobster'],
      u: '1f99e',
      a: '11.0'
    },
    {
      n: ['shrimp'],
      u: '1f990',
      a: '3.0'
    },
    {
      n: ['squid'],
      u: '1f991',
      a: '3.0'
    },
    {
      n: ['oyster'],
      u: '1f9aa',
      a: '12.0'
    },
    {
      n: ['icecream', 'soft ice cream'],
      u: '1f366',
      a: '0.6'
    },
    {
      n: ['shaved ice'],
      u: '1f367',
      a: '0.6'
    },
    {
      n: ['ice cream'],
      u: '1f368',
      a: '0.6'
    },
    {
      n: ['doughnut'],
      u: '1f369',
      a: '0.6'
    },
    {
      n: ['cookie'],
      u: '1f36a',
      a: '0.6'
    },
    {
      n: ['birthday', 'birthday cake'],
      u: '1f382',
      a: '0.6'
    },
    {
      n: ['cake', 'shortcake'],
      u: '1f370',
      a: '0.6'
    },
    {
      n: ['cupcake'],
      u: '1f9c1',
      a: '11.0'
    },
    {
      n: ['pie'],
      u: '1f967',
      a: '5.0'
    },
    {
      n: ['chocolate bar'],
      u: '1f36b',
      a: '0.6'
    },
    {
      n: ['candy'],
      u: '1f36c',
      a: '0.6'
    },
    {
      n: ['lollipop'],
      u: '1f36d',
      a: '0.6'
    },
    {
      n: ['custard'],
      u: '1f36e',
      a: '0.6'
    },
    {
      n: ['honey pot'],
      u: '1f36f',
      a: '0.6'
    },
    {
      n: ['baby bottle'],
      u: '1f37c',
      a: '1.0'
    },
    {
      n: ['glass of milk'],
      u: '1f95b',
      a: '3.0'
    },
    {
      n: ['coffee', 'hot beverage'],
      u: '2615',
      a: '0.6'
    },
    {
      n: ['teapot'],
      u: '1fad6',
      a: '13.0'
    },
    {
      n: ['tea', 'teacup without handle'],
      u: '1f375',
      a: '0.6'
    },
    {
      n: ['sake', 'sake bottle and cup'],
      u: '1f376',
      a: '0.6'
    },
    {
      n: ['champagne', 'bottle with popping cork'],
      u: '1f37e',
      a: '1.0'
    },
    {
      n: ['wine glass'],
      u: '1f377',
      a: '0.6'
    },
    {
      n: ['cocktail', 'cocktail glass'],
      u: '1f378',
      a: '0.6'
    },
    {
      n: ['tropical drink'],
      u: '1f379',
      a: '0.6'
    },
    {
      n: ['beer', 'beer mug'],
      u: '1f37a',
      a: '0.6'
    },
    {
      n: ['beers', 'clinking beer mugs'],
      u: '1f37b',
      a: '0.6'
    },
    {
      n: ['clinking glasses'],
      u: '1f942',
      a: '3.0'
    },
    {
      n: ['tumbler glass'],
      u: '1f943',
      a: '3.0'
    },
    {
      n: ['pouring liquid'],
      u: '1fad7',
      a: '14.0'
    },
    {
      n: ['cup with straw'],
      u: '1f964',
      a: '5.0'
    },
    {
      n: ['bubble tea'],
      u: '1f9cb',
      a: '13.0'
    },
    {
      n: ['beverage box'],
      u: '1f9c3',
      a: '12.0'
    },
    {
      n: ['mate drink'],
      u: '1f9c9',
      a: '12.0'
    },
    {
      n: ['ice cube'],
      u: '1f9ca',
      a: '12.0'
    },
    {
      n: ['chopsticks'],
      u: '1f962',
      a: '5.0'
    },
    {
      n: ['knife fork plate', 'fork and knife with plate'],
      u: '1f37d-fe0f',
      a: '0.7'
    },
    {
      n: ['fork and knife'],
      u: '1f374',
      a: '0.6'
    },
    {
      n: ['spoon'],
      u: '1f944',
      a: '3.0'
    },
    {
      n: ['hocho', 'knife'],
      u: '1f52a',
      a: '0.6'
    },
    {
      n: ['jar'],
      u: '1fad9',
      a: '14.0'
    },
    {
      n: ['amphora'],
      u: '1f3fa',
      a: '1.0'
    }
  ],
  旅行: [
    {
      n: ['earth africa', 'earth globe europe-africa'],
      u: '1f30d',
      a: '0.7'
    },
    {
      n: ['earth americas', 'earth globe americas'],
      u: '1f30e',
      a: '0.7'
    },
    {
      n: ['earth asia', 'earth globe asia-australia'],
      u: '1f30f',
      a: '0.6'
    },
    {
      n: ['globe with meridians'],
      u: '1f310',
      a: '1.0'
    },
    {
      n: ['world map'],
      u: '1f5fa-fe0f',
      a: '0.7'
    },
    {
      n: ['japan', 'silhouette of japan'],
      u: '1f5fe',
      a: '0.6'
    },
    {
      n: ['compass'],
      u: '1f9ed',
      a: '11.0'
    },
    {
      n: ['snow-capped mountain', 'snow capped mountain'],
      u: '1f3d4-fe0f',
      a: '0.7'
    },
    {
      n: ['mountain'],
      u: '26f0-fe0f',
      a: '0.7'
    },
    {
      n: ['volcano'],
      u: '1f30b',
      a: '0.6'
    },
    {
      n: ['mount fuji'],
      u: '1f5fb',
      a: '0.6'
    },
    {
      n: ['camping'],
      u: '1f3d5-fe0f',
      a: '0.7'
    },
    {
      n: ['beach with umbrella'],
      u: '1f3d6-fe0f',
      a: '0.7'
    },
    {
      n: ['desert'],
      u: '1f3dc-fe0f',
      a: '0.7'
    },
    {
      n: ['desert island'],
      u: '1f3dd-fe0f',
      a: '0.7'
    },
    {
      n: ['national park'],
      u: '1f3de-fe0f',
      a: '0.7'
    },
    {
      n: ['stadium'],
      u: '1f3df-fe0f',
      a: '0.7'
    },
    {
      n: ['classical building'],
      u: '1f3db-fe0f',
      a: '0.7'
    },
    {
      n: ['building construction'],
      u: '1f3d7-fe0f',
      a: '0.7'
    },
    {
      n: ['brick', 'bricks'],
      u: '1f9f1',
      a: '11.0'
    },
    {
      n: ['rock'],
      u: '1faa8',
      a: '13.0'
    },
    {
      n: ['wood'],
      u: '1fab5',
      a: '13.0'
    },
    {
      n: ['hut'],
      u: '1f6d6',
      a: '13.0'
    },
    {
      n: ['houses', 'house buildings'],
      u: '1f3d8-fe0f',
      a: '0.7'
    },
    {
      n: ['derelict house', 'derelict house building'],
      u: '1f3da-fe0f',
      a: '0.7'
    },
    {
      n: ['house', 'house building'],
      u: '1f3e0',
      a: '0.6'
    },
    {
      n: ['house with garden'],
      u: '1f3e1',
      a: '0.6'
    },
    {
      n: ['office', 'office building'],
      u: '1f3e2',
      a: '0.6'
    },
    {
      n: ['post office', 'japanese post office'],
      u: '1f3e3',
      a: '0.6'
    },
    {
      n: ['european post office'],
      u: '1f3e4',
      a: '1.0'
    },
    {
      n: ['hospital'],
      u: '1f3e5',
      a: '0.6'
    },
    {
      n: ['bank'],
      u: '1f3e6',
      a: '0.6'
    },
    {
      n: ['hotel'],
      u: '1f3e8',
      a: '0.6'
    },
    {
      n: ['love hotel'],
      u: '1f3e9',
      a: '0.6'
    },
    {
      n: ['convenience store'],
      u: '1f3ea',
      a: '0.6'
    },
    {
      n: ['school'],
      u: '1f3eb',
      a: '0.6'
    },
    {
      n: ['department store'],
      u: '1f3ec',
      a: '0.6'
    },
    {
      n: ['factory'],
      u: '1f3ed',
      a: '0.6'
    },
    {
      n: ['japanese castle'],
      u: '1f3ef',
      a: '0.6'
    },
    {
      n: ['european castle'],
      u: '1f3f0',
      a: '0.6'
    },
    {
      n: ['wedding'],
      u: '1f492',
      a: '0.6'
    },
    {
      n: ['tokyo tower'],
      u: '1f5fc',
      a: '0.6'
    },
    {
      n: ['statue of liberty'],
      u: '1f5fd',
      a: '0.6'
    },
    {
      n: ['church'],
      u: '26ea',
      a: '0.6'
    },
    {
      n: ['mosque'],
      u: '1f54c',
      a: '1.0'
    },
    {
      n: ['hindu temple'],
      u: '1f6d5',
      a: '12.0'
    },
    {
      n: ['synagogue'],
      u: '1f54d',
      a: '1.0'
    },
    {
      n: ['shinto shrine'],
      u: '26e9-fe0f',
      a: '0.7'
    },
    {
      n: ['kaaba'],
      u: '1f54b',
      a: '1.0'
    },
    {
      n: ['fountain'],
      u: '26f2',
      a: '0.6'
    },
    {
      n: ['tent'],
      u: '26fa',
      a: '0.6'
    },
    {
      n: ['foggy'],
      u: '1f301',
      a: '0.6'
    },
    {
      n: ['night with stars'],
      u: '1f303',
      a: '0.6'
    },
    {
      n: ['cityscape'],
      u: '1f3d9-fe0f',
      a: '0.7'
    },
    {
      n: ['sunrise over mountains'],
      u: '1f304',
      a: '0.6'
    },
    {
      n: ['sunrise'],
      u: '1f305',
      a: '0.6'
    },
    {
      n: ['city sunset', 'cityscape at dusk'],
      u: '1f306',
      a: '0.6'
    },
    {
      n: ['city sunrise', 'sunset over buildings'],
      u: '1f307',
      a: '0.6'
    },
    {
      n: ['bridge at night'],
      u: '1f309',
      a: '0.6'
    },
    {
      n: ['hotsprings', 'hot springs'],
      u: '2668-fe0f',
      a: '0.6'
    },
    {
      n: ['carousel horse'],
      u: '1f3a0',
      a: '0.6'
    },
    {
      n: ['playground slide'],
      u: '1f6dd',
      a: '14.0'
    },
    {
      n: ['ferris wheel'],
      u: '1f3a1',
      a: '0.6'
    },
    {
      n: ['roller coaster'],
      u: '1f3a2',
      a: '0.6'
    },
    {
      n: ['barber', 'barber pole'],
      u: '1f488',
      a: '0.6'
    },
    {
      n: ['circus tent'],
      u: '1f3aa',
      a: '0.6'
    },
    {
      n: ['steam locomotive'],
      u: '1f682',
      a: '1.0'
    },
    {
      n: ['railway car'],
      u: '1f683',
      a: '0.6'
    },
    {
      n: ['high-speed train', 'bullettrain side'],
      u: '1f684',
      a: '0.6'
    },
    {
      n: ['bullettrain front', 'high-speed train with bullet nose'],
      u: '1f685',
      a: '0.6'
    },
    {
      n: ['train', 'train2'],
      u: '1f686',
      a: '1.0'
    },
    {
      n: ['metro'],
      u: '1f687',
      a: '0.6'
    },
    {
      n: ['light rail'],
      u: '1f688',
      a: '1.0'
    },
    {
      n: ['station'],
      u: '1f689',
      a: '0.6'
    },
    {
      n: ['tram'],
      u: '1f68a',
      a: '1.0'
    },
    {
      n: ['monorail'],
      u: '1f69d',
      a: '1.0'
    },
    {
      n: ['mountain railway'],
      u: '1f69e',
      a: '1.0'
    },
    {
      n: ['train', 'tram car'],
      u: '1f68b',
      a: '1.0'
    },
    {
      n: ['bus'],
      u: '1f68c',
      a: '0.6'
    },
    {
      n: ['oncoming bus'],
      u: '1f68d',
      a: '0.7'
    },
    {
      n: ['trolleybus'],
      u: '1f68e',
      a: '1.0'
    },
    {
      n: ['minibus'],
      u: '1f690',
      a: '1.0'
    },
    {
      n: ['ambulance'],
      u: '1f691',
      a: '0.6'
    },
    {
      n: ['fire engine'],
      u: '1f692',
      a: '0.6'
    },
    {
      n: ['police car'],
      u: '1f693',
      a: '0.6'
    },
    {
      n: ['oncoming police car'],
      u: '1f694',
      a: '0.7'
    },
    {
      n: ['taxi'],
      u: '1f695',
      a: '0.6'
    },
    {
      n: ['oncoming taxi'],
      u: '1f696',
      a: '1.0'
    },
    {
      n: ['car', 'red car', 'automobile'],
      u: '1f697',
      a: '0.6'
    },
    {
      n: ['oncoming automobile'],
      u: '1f698',
      a: '0.7'
    },
    {
      n: ['blue car', 'recreational vehicle'],
      u: '1f699',
      a: '0.6'
    },
    {
      n: ['pickup truck'],
      u: '1f6fb',
      a: '13.0'
    },
    {
      n: ['truck', 'delivery truck'],
      u: '1f69a',
      a: '0.6'
    },
    {
      n: ['articulated lorry'],
      u: '1f69b',
      a: '1.0'
    },
    {
      n: ['tractor'],
      u: '1f69c',
      a: '1.0'
    },
    {
      n: ['racing car'],
      u: '1f3ce-fe0f',
      a: '0.7'
    },
    {
      n: ['motorcycle', 'racing motorcycle'],
      u: '1f3cd-fe0f',
      a: '0.7'
    },
    {
      n: ['motor scooter'],
      u: '1f6f5',
      a: '3.0'
    },
    {
      n: ['manual wheelchair'],
      u: '1f9bd',
      a: '12.0'
    },
    {
      n: ['motorized wheelchair'],
      u: '1f9bc',
      a: '12.0'
    },
    {
      n: ['auto rickshaw'],
      u: '1f6fa',
      a: '12.0'
    },
    {
      n: ['bike', 'bicycle'],
      u: '1f6b2',
      a: '0.6'
    },
    {
      n: ['scooter'],
      u: '1f6f4',
      a: '3.0'
    },
    {
      n: ['skateboard'],
      u: '1f6f9',
      a: '11.0'
    },
    {
      n: ['roller skate'],
      u: '1f6fc',
      a: '13.0'
    },
    {
      n: ['busstop', 'bus stop'],
      u: '1f68f',
      a: '0.6'
    },
    {
      n: ['motorway'],
      u: '1f6e3-fe0f',
      a: '0.7'
    },
    {
      n: ['railway track'],
      u: '1f6e4-fe0f',
      a: '0.7'
    },
    {
      n: ['oil drum'],
      u: '1f6e2-fe0f',
      a: '0.7'
    },
    {
      n: ['fuelpump', 'fuel pump'],
      u: '26fd',
      a: '0.6'
    },
    {
      n: ['wheel'],
      u: '1f6de',
      a: '14.0'
    },
    {
      n: ['rotating light', 'police cars revolving light'],
      u: '1f6a8',
      a: '0.6'
    },
    {
      n: ['traffic light', 'horizontal traffic light'],
      u: '1f6a5',
      a: '0.6'
    },
    {
      n: ['vertical traffic light'],
      u: '1f6a6',
      a: '1.0'
    },
    {
      n: ['octagonal sign'],
      u: '1f6d1',
      a: '3.0'
    },
    {
      n: ['construction', 'construction sign'],
      u: '1f6a7',
      a: '0.6'
    },
    {
      n: ['anchor'],
      u: '2693',
      a: '0.6'
    },
    {
      n: ['ring buoy'],
      u: '1f6df',
      a: '14.0'
    },
    {
      n: ['boat', 'sailboat'],
      u: '26f5',
      a: '0.6'
    },
    {
      n: ['canoe'],
      u: '1f6f6',
      a: '3.0'
    },
    {
      n: ['speedboat'],
      u: '1f6a4',
      a: '0.6'
    },
    {
      n: ['passenger ship'],
      u: '1f6f3-fe0f',
      a: '0.7'
    },
    {
      n: ['ferry'],
      u: '26f4-fe0f',
      a: '0.7'
    },
    {
      n: ['motor boat'],
      u: '1f6e5-fe0f',
      a: '0.7'
    },
    {
      n: ['ship'],
      u: '1f6a2',
      a: '0.6'
    },
    {
      n: ['airplane'],
      u: '2708-fe0f',
      a: '0.6'
    },
    {
      n: ['small airplane'],
      u: '1f6e9-fe0f',
      a: '0.7'
    },
    {
      n: ['airplane departure'],
      u: '1f6eb',
      a: '1.0'
    },
    {
      n: ['airplane arriving'],
      u: '1f6ec',
      a: '1.0'
    },
    {
      n: ['parachute'],
      u: '1fa82',
      a: '12.0'
    },
    {
      n: ['seat'],
      u: '1f4ba',
      a: '0.6'
    },
    {
      n: ['helicopter'],
      u: '1f681',
      a: '1.0'
    },
    {
      n: ['suspension railway'],
      u: '1f69f',
      a: '1.0'
    },
    {
      n: ['mountain cableway'],
      u: '1f6a0',
      a: '1.0'
    },
    {
      n: ['aerial tramway'],
      u: '1f6a1',
      a: '1.0'
    },
    {
      n: ['satellite'],
      u: '1f6f0-fe0f',
      a: '0.7'
    },
    {
      n: ['rocket'],
      u: '1f680',
      a: '0.6'
    },
    {
      n: ['flying saucer'],
      u: '1f6f8',
      a: '5.0'
    },
    {
      n: ['bellhop bell'],
      u: '1f6ce-fe0f',
      a: '0.7'
    },
    {
      n: ['luggage'],
      u: '1f9f3',
      a: '11.0'
    },
    {
      n: ['hourglass'],
      u: '231b',
      a: '0.6'
    },
    {
      n: ['hourglass flowing sand', 'hourglass with flowing sand'],
      u: '23f3',
      a: '0.6'
    },
    {
      n: ['watch'],
      u: '231a',
      a: '0.6'
    },
    {
      n: ['alarm clock'],
      u: '23f0',
      a: '0.6'
    },
    {
      n: ['stopwatch'],
      u: '23f1-fe0f',
      a: '1.0'
    },
    {
      n: ['timer clock'],
      u: '23f2-fe0f',
      a: '1.0'
    },
    {
      n: ['mantelpiece clock'],
      u: '1f570-fe0f',
      a: '0.7'
    },
    {
      n: ['clock12', 'clock face twelve oclock'],
      u: '1f55b',
      a: '0.6'
    },
    {
      n: ['clock1230', 'clock face twelve-thirty'],
      u: '1f567',
      a: '0.7'
    },
    {
      n: ['clock1', 'clock face one oclock'],
      u: '1f550',
      a: '0.6'
    },
    {
      n: ['clock130', 'clock face one-thirty'],
      u: '1f55c',
      a: '0.7'
    },
    {
      n: ['clock2', 'clock face two oclock'],
      u: '1f551',
      a: '0.6'
    },
    {
      n: ['clock230', 'clock face two-thirty'],
      u: '1f55d',
      a: '0.7'
    },
    {
      n: ['clock3', 'clock face three oclock'],
      u: '1f552',
      a: '0.6'
    },
    {
      n: ['clock330', 'clock face three-thirty'],
      u: '1f55e',
      a: '0.7'
    },
    {
      n: ['clock4', 'clock face four oclock'],
      u: '1f553',
      a: '0.6'
    },
    {
      n: ['clock430', 'clock face four-thirty'],
      u: '1f55f',
      a: '0.7'
    },
    {
      n: ['clock5', 'clock face five oclock'],
      u: '1f554',
      a: '0.6'
    },
    {
      n: ['clock530', 'clock face five-thirty'],
      u: '1f560',
      a: '0.7'
    },
    {
      n: ['clock6', 'clock face six oclock'],
      u: '1f555',
      a: '0.6'
    },
    {
      n: ['clock630', 'clock face six-thirty'],
      u: '1f561',
      a: '0.7'
    },
    {
      n: ['clock7', 'clock face seven oclock'],
      u: '1f556',
      a: '0.6'
    },
    {
      n: ['clock730', 'clock face seven-thirty'],
      u: '1f562',
      a: '0.7'
    },
    {
      n: ['clock8', 'clock face eight oclock'],
      u: '1f557',
      a: '0.6'
    },
    {
      n: ['clock830', 'clock face eight-thirty'],
      u: '1f563',
      a: '0.7'
    },
    {
      n: ['clock9', 'clock face nine oclock'],
      u: '1f558',
      a: '0.6'
    },
    {
      n: ['clock930', 'clock face nine-thirty'],
      u: '1f564',
      a: '0.7'
    },
    {
      n: ['clock10', 'clock face ten oclock'],
      u: '1f559',
      a: '0.6'
    },
    {
      n: ['clock1030', 'clock face ten-thirty'],
      u: '1f565',
      a: '0.7'
    },
    {
      n: ['clock11', 'clock face eleven oclock'],
      u: '1f55a',
      a: '0.6'
    },
    {
      n: ['clock1130', 'clock face eleven-thirty'],
      u: '1f566',
      a: '0.7'
    },
    {
      n: ['new moon', 'new moon symbol'],
      u: '1f311',
      a: '0.6'
    },
    {
      n: ['waxing crescent moon', 'waxing crescent moon symbol'],
      u: '1f312',
      a: '1.0'
    },
    {
      n: ['first quarter moon', 'first quarter moon symbol'],
      u: '1f313',
      a: '0.6'
    },
    {
      n: ['moon', 'waxing gibbous moon', 'waxing gibbous moon symbol'],
      u: '1f314',
      a: '0.6'
    },
    {
      n: ['full moon', 'full moon symbol'],
      u: '1f315',
      a: '0.6'
    },
    {
      n: ['waning gibbous moon', 'waning gibbous moon symbol'],
      u: '1f316',
      a: '1.0'
    },
    {
      n: ['last quarter moon', 'last quarter moon symbol'],
      u: '1f317',
      a: '1.0'
    },
    {
      n: ['waning crescent moon', 'waning crescent moon symbol'],
      u: '1f318',
      a: '1.0'
    },
    {
      n: ['crescent moon'],
      u: '1f319',
      a: '0.6'
    },
    {
      n: ['new moon with face'],
      u: '1f31a',
      a: '1.0'
    },
    {
      n: ['first quarter moon with face'],
      u: '1f31b',
      a: '0.6'
    },
    {
      n: ['last quarter moon with face'],
      u: '1f31c',
      a: '0.7'
    },
    {
      n: ['thermometer'],
      u: '1f321-fe0f',
      a: '0.7'
    },
    {
      n: ['sunny', 'black sun with rays'],
      u: '2600-fe0f',
      a: '0.6'
    },
    {
      n: ['full moon with face'],
      u: '1f31d',
      a: '1.0'
    },
    {
      n: ['sun with face'],
      u: '1f31e',
      a: '1.0'
    },
    {
      n: ['ringed planet'],
      u: '1fa90',
      a: '12.0'
    },
    {
      n: ['star', 'white medium star'],
      u: '2b50',
      a: '0.6'
    },
    {
      n: ['star2', 'glowing star'],
      u: '1f31f',
      a: '0.6'
    },
    {
      n: ['stars', 'shooting star'],
      u: '1f320',
      a: '0.6'
    },
    {
      n: ['milky way'],
      u: '1f30c',
      a: '0.6'
    },
    {
      n: ['cloud'],
      u: '2601-fe0f',
      a: '0.6'
    },
    {
      n: ['partly sunny', 'sun behind cloud'],
      u: '26c5',
      a: '0.6'
    },
    {
      n: ['thunder cloud and rain', 'cloud with lightning and rain'],
      u: '26c8-fe0f',
      a: '0.7'
    },
    {
      n: ['mostly sunny', 'sun small cloud', 'sun behind small cloud'],
      u: '1f324-fe0f',
      a: '0.7'
    },
    {
      n: ['barely sunny', 'sun behind cloud', 'sun behind large cloud'],
      u: '1f325-fe0f',
      a: '0.7'
    },
    {
      n: ['partly sunny rain', 'sun behind rain cloud'],
      u: '1f326-fe0f',
      a: '0.7'
    },
    {
      n: ['rain cloud', 'cloud with rain'],
      u: '1f327-fe0f',
      a: '0.7'
    },
    {
      n: ['snow cloud', 'cloud with snow'],
      u: '1f328-fe0f',
      a: '0.7'
    },
    {
      n: ['lightning', 'lightning cloud', 'cloud with lightning'],
      u: '1f329-fe0f',
      a: '0.7'
    },
    {
      n: ['tornado', 'tornado cloud'],
      u: '1f32a-fe0f',
      a: '0.7'
    },
    {
      n: ['fog'],
      u: '1f32b-fe0f',
      a: '0.7'
    },
    {
      n: ['wind face', 'wind blowing face'],
      u: '1f32c-fe0f',
      a: '0.7'
    },
    {
      n: ['cyclone'],
      u: '1f300',
      a: '0.6'
    },
    {
      n: ['rainbow'],
      u: '1f308',
      a: '0.6'
    },
    {
      n: ['closed umbrella'],
      u: '1f302',
      a: '0.6'
    },
    {
      n: ['umbrella'],
      u: '2602-fe0f',
      a: '0.7'
    },
    {
      n: ['umbrella with rain drops'],
      u: '2614',
      a: '0.6'
    },
    {
      n: ['umbrella on ground'],
      u: '26f1-fe0f',
      a: '0.7'
    },
    {
      n: ['zap', 'high voltage sign'],
      u: '26a1',
      a: '0.6'
    },
    {
      n: ['snowflake'],
      u: '2744-fe0f',
      a: '0.6'
    },
    {
      n: ['snowman'],
      u: '2603-fe0f',
      a: '0.7'
    },
    {
      n: ['snowman without snow'],
      u: '26c4',
      a: '0.6'
    },
    {
      n: ['comet'],
      u: '2604-fe0f',
      a: '1.0'
    },
    {
      n: ['fire'],
      u: '1f525',
      a: '0.6'
    },
    {
      n: ['droplet'],
      u: '1f4a7',
      a: '0.6'
    },
    {
      n: ['ocean', 'water wave'],
      u: '1f30a',
      a: '0.6'
    }
  ],
  活动: [
    {
      n: ['jack-o-lantern', 'jack o lantern'],
      u: '1f383',
      a: '0.6'
    },
    {
      n: ['christmas tree'],
      u: '1f384',
      a: '0.6'
    },
    {
      n: ['fireworks'],
      u: '1f386',
      a: '0.6'
    },
    {
      n: ['sparkler', 'firework sparkler'],
      u: '1f387',
      a: '0.6'
    },
    {
      n: ['firecracker'],
      u: '1f9e8',
      a: '11.0'
    },
    {
      n: ['sparkles'],
      u: '2728',
      a: '0.6'
    },
    {
      n: ['balloon'],
      u: '1f388',
      a: '0.6'
    },
    {
      n: ['tada', 'party popper'],
      u: '1f389',
      a: '0.6'
    },
    {
      n: ['confetti ball'],
      u: '1f38a',
      a: '0.6'
    },
    {
      n: ['tanabata tree'],
      u: '1f38b',
      a: '0.6'
    },
    {
      n: ['bamboo', 'pine decoration'],
      u: '1f38d',
      a: '0.6'
    },
    {
      n: ['dolls', 'japanese dolls'],
      u: '1f38e',
      a: '0.6'
    },
    {
      n: ['flags', 'carp streamer'],
      u: '1f38f',
      a: '0.6'
    },
    {
      n: ['wind chime'],
      u: '1f390',
      a: '0.6'
    },
    {
      n: ['rice scene', 'moon viewing ceremony'],
      u: '1f391',
      a: '0.6'
    },
    {
      n: ['red envelope', 'red gift envelope'],
      u: '1f9e7',
      a: '11.0'
    },
    {
      n: ['ribbon'],
      u: '1f380',
      a: '0.6'
    },
    {
      n: ['gift', 'wrapped present'],
      u: '1f381',
      a: '0.6'
    },
    {
      n: ['reminder ribbon'],
      u: '1f397-fe0f',
      a: '0.7'
    },
    {
      n: ['admission tickets'],
      u: '1f39f-fe0f',
      a: '0.7'
    },
    {
      n: ['ticket'],
      u: '1f3ab',
      a: '0.6'
    },
    {
      n: ['medal', 'military medal'],
      u: '1f396-fe0f',
      a: '0.7'
    },
    {
      n: ['trophy'],
      u: '1f3c6',
      a: '0.6'
    },
    {
      n: ['sports medal'],
      u: '1f3c5',
      a: '1.0'
    },
    {
      n: ['first place medal'],
      u: '1f947',
      a: '3.0'
    },
    {
      n: ['second place medal'],
      u: '1f948',
      a: '3.0'
    },
    {
      n: ['third place medal'],
      u: '1f949',
      a: '3.0'
    },
    {
      n: ['soccer', 'soccer ball'],
      u: '26bd',
      a: '0.6'
    },
    {
      n: ['baseball'],
      u: '26be',
      a: '0.6'
    },
    {
      n: ['softball'],
      u: '1f94e',
      a: '11.0'
    },
    {
      n: ['basketball', 'basketball and hoop'],
      u: '1f3c0',
      a: '0.6'
    },
    {
      n: ['volleyball'],
      u: '1f3d0',
      a: '1.0'
    },
    {
      n: ['football', 'american football'],
      u: '1f3c8',
      a: '0.6'
    },
    {
      n: ['rugby football'],
      u: '1f3c9',
      a: '1.0'
    },
    {
      n: ['tennis', 'tennis racquet and ball'],
      u: '1f3be',
      a: '0.6'
    },
    {
      n: ['flying disc'],
      u: '1f94f',
      a: '11.0'
    },
    {
      n: ['bowling'],
      u: '1f3b3',
      a: '0.6'
    },
    {
      n: ['cricket bat and ball'],
      u: '1f3cf',
      a: '1.0'
    },
    {
      n: ['field hockey stick and ball'],
      u: '1f3d1',
      a: '1.0'
    },
    {
      n: ['ice hockey stick and puck'],
      u: '1f3d2',
      a: '1.0'
    },
    {
      n: ['lacrosse', 'lacrosse stick and ball'],
      u: '1f94d',
      a: '11.0'
    },
    {
      n: ['table tennis paddle and ball'],
      u: '1f3d3',
      a: '1.0'
    },
    {
      n: ['badminton racquet and shuttlecock'],
      u: '1f3f8',
      a: '1.0'
    },
    {
      n: ['boxing glove'],
      u: '1f94a',
      a: '3.0'
    },
    {
      n: ['martial arts uniform'],
      u: '1f94b',
      a: '3.0'
    },
    {
      n: ['goal net'],
      u: '1f945',
      a: '3.0'
    },
    {
      n: ['golf', 'flag in hole'],
      u: '26f3',
      a: '0.6'
    },
    {
      n: ['ice skate'],
      u: '26f8-fe0f',
      a: '0.7'
    },
    {
      n: ['fishing pole and fish'],
      u: '1f3a3',
      a: '0.6'
    },
    {
      n: ['diving mask'],
      u: '1f93f',
      a: '12.0'
    },
    {
      n: ['running shirt with sash'],
      u: '1f3bd',
      a: '0.6'
    },
    {
      n: ['ski', 'ski and ski boot'],
      u: '1f3bf',
      a: '0.6'
    },
    {
      n: ['sled'],
      u: '1f6f7',
      a: '5.0'
    },
    {
      n: ['curling stone'],
      u: '1f94c',
      a: '5.0'
    },
    {
      n: ['dart', 'direct hit'],
      u: '1f3af',
      a: '0.6'
    },
    {
      n: ['yo-yo'],
      u: '1fa80',
      a: '12.0'
    },
    {
      n: ['kite'],
      u: '1fa81',
      a: '12.0'
    },
    {
      n: ['8ball', 'billiards'],
      u: '1f3b1',
      a: '0.6'
    },
    {
      n: ['crystal ball'],
      u: '1f52e',
      a: '0.6'
    },
    {
      n: ['magic wand'],
      u: '1fa84',
      a: '13.0'
    },
    {
      n: ['nazar amulet'],
      u: '1f9ff',
      a: '11.0'
    },
    {
      n: ['hamsa'],
      u: '1faac',
      a: '14.0'
    },
    {
      n: ['video game'],
      u: '1f3ae',
      a: '0.6'
    },
    {
      n: ['joystick'],
      u: '1f579-fe0f',
      a: '0.7'
    },
    {
      n: ['slot machine'],
      u: '1f3b0',
      a: '0.6'
    },
    {
      n: ['game die'],
      u: '1f3b2',
      a: '0.6'
    },
    {
      n: ['jigsaw', 'jigsaw puzzle piece'],
      u: '1f9e9',
      a: '11.0'
    },
    {
      n: ['teddy bear'],
      u: '1f9f8',
      a: '11.0'
    },
    {
      n: ['pinata'],
      u: '1fa85',
      a: '13.0'
    },
    {
      n: ['mirror ball'],
      u: '1faa9',
      a: '14.0'
    },
    {
      n: ['nesting dolls'],
      u: '1fa86',
      a: '13.0'
    },
    {
      n: ['spades', 'black spade suit'],
      u: '2660-fe0f',
      a: '0.6'
    },
    {
      n: ['hearts', 'black heart suit'],
      u: '2665-fe0f',
      a: '0.6'
    },
    {
      n: ['diamonds', 'black diamond suit'],
      u: '2666-fe0f',
      a: '0.6'
    },
    {
      n: ['clubs', 'black club suit'],
      u: '2663-fe0f',
      a: '0.6'
    },
    {
      n: ['chess pawn'],
      u: '265f-fe0f',
      a: '11.0'
    },
    {
      n: ['black joker', 'playing card black joker'],
      u: '1f0cf',
      a: '0.6'
    },
    {
      n: ['mahjong', 'mahjong tile red dragon'],
      u: '1f004',
      a: '0.6'
    },
    {
      n: ['flower playing cards'],
      u: '1f3b4',
      a: '0.6'
    },
    {
      n: ['performing arts'],
      u: '1f3ad',
      a: '0.6'
    },
    {
      n: ['framed picture', 'frame with picture'],
      u: '1f5bc-fe0f',
      a: '0.7'
    },
    {
      n: ['art', 'artist palette'],
      u: '1f3a8',
      a: '0.6'
    },
    {
      n: ['thread', 'spool of thread'],
      u: '1f9f5',
      a: '11.0'
    },
    {
      n: ['sewing needle'],
      u: '1faa1',
      a: '13.0'
    },
    {
      n: ['yarn', 'ball of yarn'],
      u: '1f9f6',
      a: '11.0'
    },
    {
      n: ['knot'],
      u: '1faa2',
      a: '13.0'
    }
  ],
  物品: [
    {
      n: ['eyeglasses'],
      u: '1f453',
      a: '0.6'
    },
    {
      n: ['sunglasses', 'dark sunglasses'],
      u: '1f576-fe0f',
      a: '0.7'
    },
    {
      n: ['goggles'],
      u: '1f97d',
      a: '11.0'
    },
    {
      n: ['lab coat'],
      u: '1f97c',
      a: '11.0'
    },
    {
      n: ['safety vest'],
      u: '1f9ba',
      a: '12.0'
    },
    {
      n: ['necktie'],
      u: '1f454',
      a: '0.6'
    },
    {
      n: ['shirt', 'tshirt', 't-shirt'],
      u: '1f455',
      a: '0.6'
    },
    {
      n: ['jeans'],
      u: '1f456',
      a: '0.6'
    },
    {
      n: ['scarf'],
      u: '1f9e3',
      a: '5.0'
    },
    {
      n: ['gloves'],
      u: '1f9e4',
      a: '5.0'
    },
    {
      n: ['coat'],
      u: '1f9e5',
      a: '5.0'
    },
    {
      n: ['socks'],
      u: '1f9e6',
      a: '5.0'
    },
    {
      n: ['dress'],
      u: '1f457',
      a: '0.6'
    },
    {
      n: ['kimono'],
      u: '1f458',
      a: '0.6'
    },
    {
      n: ['sari'],
      u: '1f97b',
      a: '12.0'
    },
    {
      n: ['one-piece swimsuit'],
      u: '1fa71',
      a: '12.0'
    },
    {
      n: ['briefs'],
      u: '1fa72',
      a: '12.0'
    },
    {
      n: ['shorts'],
      u: '1fa73',
      a: '12.0'
    },
    {
      n: ['bikini'],
      u: '1f459',
      a: '0.6'
    },
    {
      n: ['womans clothes'],
      u: '1f45a',
      a: '0.6'
    },
    {
      n: ['purse'],
      u: '1f45b',
      a: '0.6'
    },
    {
      n: ['handbag'],
      u: '1f45c',
      a: '0.6'
    },
    {
      n: ['pouch'],
      u: '1f45d',
      a: '0.6'
    },
    {
      n: ['shopping bags'],
      u: '1f6cd-fe0f',
      a: '0.7'
    },
    {
      n: ['school satchel'],
      u: '1f392',
      a: '0.6'
    },
    {
      n: ['thong sandal'],
      u: '1fa74',
      a: '13.0'
    },
    {
      n: ['shoe', 'mans shoe'],
      u: '1f45e',
      a: '0.6'
    },
    {
      n: ['athletic shoe'],
      u: '1f45f',
      a: '0.6'
    },
    {
      n: ['hiking boot'],
      u: '1f97e',
      a: '11.0'
    },
    {
      n: ['flat shoe', 'womans flat shoe'],
      u: '1f97f',
      a: '11.0'
    },
    {
      n: ['high heel', 'high-heeled shoe'],
      u: '1f460',
      a: '0.6'
    },
    {
      n: ['sandal', 'womans sandal'],
      u: '1f461',
      a: '0.6'
    },
    {
      n: ['ballet shoes'],
      u: '1fa70',
      a: '12.0'
    },
    {
      n: ['boot', 'womans boots'],
      u: '1f462',
      a: '0.6'
    },
    {
      n: ['crown'],
      u: '1f451',
      a: '0.6'
    },
    {
      n: ['womans hat'],
      u: '1f452',
      a: '0.6'
    },
    {
      n: ['tophat', 'top hat'],
      u: '1f3a9',
      a: '0.6'
    },
    {
      n: ['mortar board', 'graduation cap'],
      u: '1f393',
      a: '0.6'
    },
    {
      n: ['billed cap'],
      u: '1f9e2',
      a: '5.0'
    },
    {
      n: ['military helmet'],
      u: '1fa96',
      a: '13.0'
    },
    {
      n: ['rescue worker’s helmet', 'helmet with white cross'],
      u: '26d1-fe0f',
      a: '0.7'
    },
    {
      n: ['prayer beads'],
      u: '1f4ff',
      a: '1.0'
    },
    {
      n: ['lipstick'],
      u: '1f484',
      a: '0.6'
    },
    {
      n: ['ring'],
      u: '1f48d',
      a: '0.6'
    },
    {
      n: ['gem', 'gem stone'],
      u: '1f48e',
      a: '0.6'
    },
    {
      n: ['mute', 'speaker with cancellation stroke'],
      u: '1f507',
      a: '1.0'
    },
    {
      n: ['speaker'],
      u: '1f508',
      a: '0.7'
    },
    {
      n: ['sound', 'speaker with one sound wave'],
      u: '1f509',
      a: '1.0'
    },
    {
      n: ['loud sound', 'speaker with three sound waves'],
      u: '1f50a',
      a: '0.6'
    },
    {
      n: ['loudspeaker', 'public address loudspeaker'],
      u: '1f4e2',
      a: '0.6'
    },
    {
      n: ['mega', 'cheering megaphone'],
      u: '1f4e3',
      a: '0.6'
    },
    {
      n: ['postal horn'],
      u: '1f4ef',
      a: '1.0'
    },
    {
      n: ['bell'],
      u: '1f514',
      a: '0.6'
    },
    {
      n: ['no bell', 'bell with cancellation stroke'],
      u: '1f515',
      a: '1.0'
    },
    {
      n: ['musical score'],
      u: '1f3bc',
      a: '0.6'
    },
    {
      n: ['musical note'],
      u: '1f3b5',
      a: '0.6'
    },
    {
      n: ['notes', 'multiple musical notes'],
      u: '1f3b6',
      a: '0.6'
    },
    {
      n: ['studio microphone'],
      u: '1f399-fe0f',
      a: '0.7'
    },
    {
      n: ['level slider'],
      u: '1f39a-fe0f',
      a: '0.7'
    },
    {
      n: ['control knobs'],
      u: '1f39b-fe0f',
      a: '0.7'
    },
    {
      n: ['microphone'],
      u: '1f3a4',
      a: '0.6'
    },
    {
      n: ['headphone', 'headphones'],
      u: '1f3a7',
      a: '0.6'
    },
    {
      n: ['radio'],
      u: '1f4fb',
      a: '0.6'
    },
    {
      n: ['saxophone'],
      u: '1f3b7',
      a: '0.6'
    },
    {
      n: ['accordion'],
      u: '1fa97',
      a: '13.0'
    },
    {
      n: ['guitar'],
      u: '1f3b8',
      a: '0.6'
    },
    {
      n: ['musical keyboard'],
      u: '1f3b9',
      a: '0.6'
    },
    {
      n: ['trumpet'],
      u: '1f3ba',
      a: '0.6'
    },
    {
      n: ['violin'],
      u: '1f3bb',
      a: '0.6'
    },
    {
      n: ['banjo'],
      u: '1fa95',
      a: '12.0'
    },
    {
      n: ['drum with drumsticks'],
      u: '1f941',
      a: '3.0'
    },
    {
      n: ['long drum'],
      u: '1fa98',
      a: '13.0'
    },
    {
      n: ['iphone', 'mobile phone'],
      u: '1f4f1',
      a: '0.6'
    },
    {
      n: ['calling', 'mobile phone with rightwards arrow at left'],
      u: '1f4f2',
      a: '0.6'
    },
    {
      n: ['phone', 'telephone', 'black telephone'],
      u: '260e-fe0f',
      a: '0.6'
    },
    {
      n: ['telephone receiver'],
      u: '1f4de',
      a: '0.6'
    },
    {
      n: ['pager'],
      u: '1f4df',
      a: '0.6'
    },
    {
      n: ['fax', 'fax machine'],
      u: '1f4e0',
      a: '0.6'
    },
    {
      n: ['battery'],
      u: '1f50b',
      a: '0.6'
    },
    {
      n: ['low battery'],
      u: '1faab',
      a: '14.0'
    },
    {
      n: ['electric plug'],
      u: '1f50c',
      a: '0.6'
    },
    {
      n: ['computer', 'personal computer'],
      u: '1f4bb',
      a: '0.6'
    },
    {
      n: ['desktop computer'],
      u: '1f5a5-fe0f',
      a: '0.7'
    },
    {
      n: ['printer'],
      u: '1f5a8-fe0f',
      a: '0.7'
    },
    {
      n: ['keyboard'],
      u: '2328-fe0f',
      a: '1.0'
    },
    {
      n: ['computer mouse', 'three button mouse'],
      u: '1f5b1-fe0f',
      a: '0.7'
    },
    {
      n: ['trackball'],
      u: '1f5b2-fe0f',
      a: '0.7'
    },
    {
      n: ['minidisc'],
      u: '1f4bd',
      a: '0.6'
    },
    {
      n: ['floppy disk'],
      u: '1f4be',
      a: '0.6'
    },
    {
      n: ['cd', 'optical disc'],
      u: '1f4bf',
      a: '0.6'
    },
    {
      n: ['dvd'],
      u: '1f4c0',
      a: '0.6'
    },
    {
      n: ['abacus'],
      u: '1f9ee',
      a: '11.0'
    },
    {
      n: ['movie camera'],
      u: '1f3a5',
      a: '0.6'
    },
    {
      n: ['film frames'],
      u: '1f39e-fe0f',
      a: '0.7'
    },
    {
      n: ['film projector'],
      u: '1f4fd-fe0f',
      a: '0.7'
    },
    {
      n: ['clapper', 'clapper board'],
      u: '1f3ac',
      a: '0.6'
    },
    {
      n: ['tv', 'television'],
      u: '1f4fa',
      a: '0.6'
    },
    {
      n: ['camera'],
      u: '1f4f7',
      a: '0.6'
    },
    {
      n: ['camera with flash'],
      u: '1f4f8',
      a: '1.0'
    },
    {
      n: ['video camera'],
      u: '1f4f9',
      a: '0.6'
    },
    {
      n: ['vhs', 'videocassette'],
      u: '1f4fc',
      a: '0.6'
    },
    {
      n: ['mag', 'left-pointing magnifying glass'],
      u: '1f50d',
      a: '0.6'
    },
    {
      n: ['mag right', 'right-pointing magnifying glass'],
      u: '1f50e',
      a: '0.6'
    },
    {
      n: ['candle'],
      u: '1f56f-fe0f',
      a: '0.7'
    },
    {
      n: ['bulb', 'electric light bulb'],
      u: '1f4a1',
      a: '0.6'
    },
    {
      n: ['flashlight', 'electric torch'],
      u: '1f526',
      a: '0.6'
    },
    {
      n: ['lantern', 'izakaya lantern'],
      u: '1f3ee',
      a: '0.6'
    },
    {
      n: ['diya lamp'],
      u: '1fa94',
      a: '12.0'
    },
    {
      n: ['notebook with decorative cover'],
      u: '1f4d4',
      a: '0.6'
    },
    {
      n: ['closed book'],
      u: '1f4d5',
      a: '0.6'
    },
    {
      n: ['book', 'open book'],
      u: '1f4d6',
      a: '0.6'
    },
    {
      n: ['green book'],
      u: '1f4d7',
      a: '0.6'
    },
    {
      n: ['blue book'],
      u: '1f4d8',
      a: '0.6'
    },
    {
      n: ['orange book'],
      u: '1f4d9',
      a: '0.6'
    },
    {
      n: ['books'],
      u: '1f4da',
      a: '0.6'
    },
    {
      n: ['notebook'],
      u: '1f4d3',
      a: '0.6'
    },
    {
      n: ['ledger'],
      u: '1f4d2',
      a: '0.6'
    },
    {
      n: ['page with curl'],
      u: '1f4c3',
      a: '0.6'
    },
    {
      n: ['scroll'],
      u: '1f4dc',
      a: '0.6'
    },
    {
      n: ['page facing up'],
      u: '1f4c4',
      a: '0.6'
    },
    {
      n: ['newspaper'],
      u: '1f4f0',
      a: '0.6'
    },
    {
      n: ['rolled-up newspaper', 'rolled up newspaper'],
      u: '1f5de-fe0f',
      a: '0.7'
    },
    {
      n: ['bookmark tabs'],
      u: '1f4d1',
      a: '0.6'
    },
    {
      n: ['bookmark'],
      u: '1f516',
      a: '0.6'
    },
    {
      n: ['label'],
      u: '1f3f7-fe0f',
      a: '0.7'
    },
    {
      n: ['moneybag', 'money bag'],
      u: '1f4b0',
      a: '0.6'
    },
    {
      n: ['coin'],
      u: '1fa99',
      a: '13.0'
    },
    {
      n: ['yen', 'banknote with yen sign'],
      u: '1f4b4',
      a: '0.6'
    },
    {
      n: ['dollar', 'banknote with dollar sign'],
      u: '1f4b5',
      a: '0.6'
    },
    {
      n: ['euro', 'banknote with euro sign'],
      u: '1f4b6',
      a: '1.0'
    },
    {
      n: ['pound', 'banknote with pound sign'],
      u: '1f4b7',
      a: '1.0'
    },
    {
      n: ['money with wings'],
      u: '1f4b8',
      a: '0.6'
    },
    {
      n: ['credit card'],
      u: '1f4b3',
      a: '0.6'
    },
    {
      n: ['receipt'],
      u: '1f9fe',
      a: '11.0'
    },
    {
      n: ['chart', 'chart with upwards trend and yen sign'],
      u: '1f4b9',
      a: '0.6'
    },
    {
      n: ['email', 'envelope'],
      u: '2709-fe0f',
      a: '0.6'
    },
    {
      n: ['e-mail', 'e-mail symbol'],
      u: '1f4e7',
      a: '0.6'
    },
    {
      n: ['incoming envelope'],
      u: '1f4e8',
      a: '0.6'
    },
    {
      n: ['envelope with arrow', 'envelope with downwards arrow above'],
      u: '1f4e9',
      a: '0.6'
    },
    {
      n: ['outbox tray'],
      u: '1f4e4',
      a: '0.6'
    },
    {
      n: ['inbox tray'],
      u: '1f4e5',
      a: '0.6'
    },
    {
      n: ['package'],
      u: '1f4e6',
      a: '0.6'
    },
    {
      n: ['mailbox', 'closed mailbox with raised flag'],
      u: '1f4eb',
      a: '0.6'
    },
    {
      n: ['mailbox closed', 'closed mailbox with lowered flag'],
      u: '1f4ea',
      a: '0.6'
    },
    {
      n: ['mailbox with mail', 'open mailbox with raised flag'],
      u: '1f4ec',
      a: '0.7'
    },
    {
      n: ['mailbox with no mail', 'open mailbox with lowered flag'],
      u: '1f4ed',
      a: '0.7'
    },
    {
      n: ['postbox'],
      u: '1f4ee',
      a: '0.6'
    },
    {
      n: ['ballot box with ballot'],
      u: '1f5f3-fe0f',
      a: '0.7'
    },
    {
      n: ['pencil', 'pencil2'],
      u: '270f-fe0f',
      a: '0.6'
    },
    {
      n: ['black nib'],
      u: '2712-fe0f',
      a: '0.6'
    },
    {
      n: ['fountain pen', 'lower left fountain pen'],
      u: '1f58b-fe0f',
      a: '0.7'
    },
    {
      n: ['pen', 'lower left ballpoint pen'],
      u: '1f58a-fe0f',
      a: '0.7'
    },
    {
      n: ['paintbrush', 'lower left paintbrush'],
      u: '1f58c-fe0f',
      a: '0.7'
    },
    {
      n: ['crayon', 'lower left crayon'],
      u: '1f58d-fe0f',
      a: '0.7'
    },
    {
      n: ['memo', 'pencil'],
      u: '1f4dd',
      a: '0.6'
    },
    {
      n: ['briefcase'],
      u: '1f4bc',
      a: '0.6'
    },
    {
      n: ['file folder'],
      u: '1f4c1',
      a: '0.6'
    },
    {
      n: ['open file folder'],
      u: '1f4c2',
      a: '0.6'
    },
    {
      n: ['card index dividers'],
      u: '1f5c2-fe0f',
      a: '0.7'
    },
    {
      n: ['date', 'calendar'],
      u: '1f4c5',
      a: '0.6'
    },
    {
      n: ['calendar', 'tear-off calendar'],
      u: '1f4c6',
      a: '0.6'
    },
    {
      n: ['spiral notepad', 'spiral note pad'],
      u: '1f5d2-fe0f',
      a: '0.7'
    },
    {
      n: ['spiral calendar', 'spiral calendar pad'],
      u: '1f5d3-fe0f',
      a: '0.7'
    },
    {
      n: ['card index'],
      u: '1f4c7',
      a: '0.6'
    },
    {
      n: ['chart with upwards trend'],
      u: '1f4c8',
      a: '0.6'
    },
    {
      n: ['chart with downwards trend'],
      u: '1f4c9',
      a: '0.6'
    },
    {
      n: ['bar chart'],
      u: '1f4ca',
      a: '0.6'
    },
    {
      n: ['clipboard'],
      u: '1f4cb',
      a: '0.6'
    },
    {
      n: ['pushpin'],
      u: '1f4cc',
      a: '0.6'
    },
    {
      n: ['round pushpin'],
      u: '1f4cd',
      a: '0.6'
    },
    {
      n: ['paperclip'],
      u: '1f4ce',
      a: '0.6'
    },
    {
      n: ['linked paperclips'],
      u: '1f587-fe0f',
      a: '0.7'
    },
    {
      n: ['straight ruler'],
      u: '1f4cf',
      a: '0.6'
    },
    {
      n: ['triangular ruler'],
      u: '1f4d0',
      a: '0.6'
    },
    {
      n: ['scissors', 'black scissors'],
      u: '2702-fe0f',
      a: '0.6'
    },
    {
      n: ['card file box'],
      u: '1f5c3-fe0f',
      a: '0.7'
    },
    {
      n: ['file cabinet'],
      u: '1f5c4-fe0f',
      a: '0.7'
    },
    {
      n: ['wastebasket'],
      u: '1f5d1-fe0f',
      a: '0.7'
    },
    {
      n: ['lock'],
      u: '1f512',
      a: '0.6'
    },
    {
      n: ['unlock', 'open lock'],
      u: '1f513',
      a: '0.6'
    },
    {
      n: ['lock with ink pen'],
      u: '1f50f',
      a: '0.6'
    },
    {
      n: ['closed lock with key'],
      u: '1f510',
      a: '0.6'
    },
    {
      n: ['key'],
      u: '1f511',
      a: '0.6'
    },
    {
      n: ['old key'],
      u: '1f5dd-fe0f',
      a: '0.7'
    },
    {
      n: ['hammer'],
      u: '1f528',
      a: '0.6'
    },
    {
      n: ['axe'],
      u: '1fa93',
      a: '12.0'
    },
    {
      n: ['pick'],
      u: '26cf-fe0f',
      a: '0.7'
    },
    {
      n: ['hammer and pick'],
      u: '2692-fe0f',
      a: '1.0'
    },
    {
      n: ['hammer and wrench'],
      u: '1f6e0-fe0f',
      a: '0.7'
    },
    {
      n: ['dagger', 'dagger knife'],
      u: '1f5e1-fe0f',
      a: '0.7'
    },
    {
      n: ['crossed swords'],
      u: '2694-fe0f',
      a: '1.0'
    },
    {
      n: ['gun', 'pistol'],
      u: '1f52b',
      a: '0.6'
    },
    {
      n: ['boomerang'],
      u: '1fa83',
      a: '13.0'
    },
    {
      n: ['bow and arrow'],
      u: '1f3f9',
      a: '1.0'
    },
    {
      n: ['shield'],
      u: '1f6e1-fe0f',
      a: '0.7'
    },
    {
      n: ['carpentry saw'],
      u: '1fa9a',
      a: '13.0'
    },
    {
      n: ['wrench'],
      u: '1f527',
      a: '0.6'
    },
    {
      n: ['screwdriver'],
      u: '1fa9b',
      a: '13.0'
    },
    {
      n: ['nut and bolt'],
      u: '1f529',
      a: '0.6'
    },
    {
      n: ['gear'],
      u: '2699-fe0f',
      a: '1.0'
    },
    {
      n: ['clamp', 'compression'],
      u: '1f5dc-fe0f',
      a: '0.7'
    },
    {
      n: ['scales', 'balance scale'],
      u: '2696-fe0f',
      a: '1.0'
    },
    {
      n: ['probing cane'],
      u: '1f9af',
      a: '12.0'
    },
    {
      n: ['link', 'link symbol'],
      u: '1f517',
      a: '0.6'
    },
    {
      n: ['chains'],
      u: '26d3-fe0f',
      a: '0.7'
    },
    {
      n: ['hook'],
      u: '1fa9d',
      a: '13.0'
    },
    {
      n: ['toolbox'],
      u: '1f9f0',
      a: '11.0'
    },
    {
      n: ['magnet'],
      u: '1f9f2',
      a: '11.0'
    },
    {
      n: ['ladder'],
      u: '1fa9c',
      a: '13.0'
    },
    {
      n: ['alembic'],
      u: '2697-fe0f',
      a: '1.0'
    },
    {
      n: ['test tube'],
      u: '1f9ea',
      a: '11.0'
    },
    {
      n: ['petri dish'],
      u: '1f9eb',
      a: '11.0'
    },
    {
      n: ['dna', 'dna double helix'],
      u: '1f9ec',
      a: '11.0'
    },
    {
      n: ['microscope'],
      u: '1f52c',
      a: '1.0'
    },
    {
      n: ['telescope'],
      u: '1f52d',
      a: '1.0'
    },
    {
      n: ['satellite antenna'],
      u: '1f4e1',
      a: '0.6'
    },
    {
      n: ['syringe'],
      u: '1f489',
      a: '0.6'
    },
    {
      n: ['drop of blood'],
      u: '1fa78',
      a: '12.0'
    },
    {
      n: ['pill'],
      u: '1f48a',
      a: '0.6'
    },
    {
      n: ['adhesive bandage'],
      u: '1fa79',
      a: '12.0'
    },
    {
      n: ['crutch'],
      u: '1fa7c',
      a: '14.0'
    },
    {
      n: ['stethoscope'],
      u: '1fa7a',
      a: '12.0'
    },
    {
      n: ['x-ray'],
      u: '1fa7b',
      a: '14.0'
    },
    {
      n: ['door'],
      u: '1f6aa',
      a: '0.6'
    },
    {
      n: ['elevator'],
      u: '1f6d7',
      a: '13.0'
    },
    {
      n: ['mirror'],
      u: '1fa9e',
      a: '13.0'
    },
    {
      n: ['window'],
      u: '1fa9f',
      a: '13.0'
    },
    {
      n: ['bed'],
      u: '1f6cf-fe0f',
      a: '0.7'
    },
    {
      n: ['couch and lamp'],
      u: '1f6cb-fe0f',
      a: '0.7'
    },
    {
      n: ['chair'],
      u: '1fa91',
      a: '12.0'
    },
    {
      n: ['toilet'],
      u: '1f6bd',
      a: '0.6'
    },
    {
      n: ['plunger'],
      u: '1faa0',
      a: '13.0'
    },
    {
      n: ['shower'],
      u: '1f6bf',
      a: '1.0'
    },
    {
      n: ['bathtub'],
      u: '1f6c1',
      a: '1.0'
    },
    {
      n: ['mouse trap'],
      u: '1faa4',
      a: '13.0'
    },
    {
      n: ['razor'],
      u: '1fa92',
      a: '12.0'
    },
    {
      n: ['lotion bottle'],
      u: '1f9f4',
      a: '11.0'
    },
    {
      n: ['safety pin'],
      u: '1f9f7',
      a: '11.0'
    },
    {
      n: ['broom'],
      u: '1f9f9',
      a: '11.0'
    },
    {
      n: ['basket'],
      u: '1f9fa',
      a: '11.0'
    },
    {
      n: ['roll of paper'],
      u: '1f9fb',
      a: '11.0'
    },
    {
      n: ['bucket'],
      u: '1faa3',
      a: '13.0'
    },
    {
      n: ['soap', 'bar of soap'],
      u: '1f9fc',
      a: '11.0'
    },
    {
      n: ['bubbles'],
      u: '1fae7',
      a: '14.0'
    },
    {
      n: ['toothbrush'],
      u: '1faa5',
      a: '13.0'
    },
    {
      n: ['sponge'],
      u: '1f9fd',
      a: '11.0'
    },
    {
      n: ['fire extinguisher'],
      u: '1f9ef',
      a: '11.0'
    },
    {
      n: ['shopping trolley'],
      u: '1f6d2',
      a: '3.0'
    },
    {
      n: ['smoking', 'smoking symbol'],
      u: '1f6ac',
      a: '0.6'
    },
    {
      n: ['coffin'],
      u: '26b0-fe0f',
      a: '1.0'
    },
    {
      n: ['headstone'],
      u: '1faa6',
      a: '13.0'
    },
    {
      n: ['funeral urn'],
      u: '26b1-fe0f',
      a: '1.0'
    },
    {
      n: ['moyai'],
      u: '1f5ff',
      a: '0.6'
    },
    {
      n: ['placard'],
      u: '1faa7',
      a: '13.0'
    },
    {
      n: ['identification card'],
      u: '1faaa',
      a: '14.0'
    }
  ],
  标志: [
    {
      n: ['atm', 'automated teller machine'],
      u: '1f3e7',
      a: '0.6'
    },
    {
      n: ['put litter in its place', 'put litter in its place symbol'],
      u: '1f6ae',
      a: '1.0'
    },
    {
      n: ['potable water', 'potable water symbol'],
      u: '1f6b0',
      a: '1.0'
    },
    {
      n: ['wheelchair', 'wheelchair symbol'],
      u: '267f',
      a: '0.6'
    },
    {
      n: ['mens', 'mens symbol'],
      u: '1f6b9',
      a: '0.6'
    },
    {
      n: ['womens', 'womens symbol'],
      u: '1f6ba',
      a: '0.6'
    },
    {
      n: ['restroom'],
      u: '1f6bb',
      a: '0.6'
    },
    {
      n: ['baby symbol'],
      u: '1f6bc',
      a: '0.6'
    },
    {
      n: ['wc', 'water closet'],
      u: '1f6be',
      a: '0.6'
    },
    {
      n: ['passport control'],
      u: '1f6c2',
      a: '1.0'
    },
    {
      n: ['customs'],
      u: '1f6c3',
      a: '1.0'
    },
    {
      n: ['baggage claim'],
      u: '1f6c4',
      a: '1.0'
    },
    {
      n: ['left luggage'],
      u: '1f6c5',
      a: '1.0'
    },
    {
      n: ['warning', 'warning sign'],
      u: '26a0-fe0f',
      a: '0.6'
    },
    {
      n: ['children crossing'],
      u: '1f6b8',
      a: '1.0'
    },
    {
      n: ['no entry'],
      u: '26d4',
      a: '0.6'
    },
    {
      n: ['no entry sign'],
      u: '1f6ab',
      a: '0.6'
    },
    {
      n: ['no bicycles'],
      u: '1f6b3',
      a: '1.0'
    },
    {
      n: ['no smoking', 'no smoking symbol'],
      u: '1f6ad',
      a: '0.6'
    },
    {
      n: ['do not litter', 'do not litter symbol'],
      u: '1f6af',
      a: '1.0'
    },
    {
      n: ['non-potable water', 'non-potable water symbol'],
      u: '1f6b1',
      a: '1.0'
    },
    {
      n: ['no pedestrians'],
      u: '1f6b7',
      a: '1.0'
    },
    {
      n: ['no mobile phones'],
      u: '1f4f5',
      a: '1.0'
    },
    {
      n: ['underage', 'no one under eighteen symbol'],
      u: '1f51e',
      a: '0.6'
    },
    {
      n: ['radioactive', 'radioactive sign'],
      u: '2622-fe0f',
      a: '1.0'
    },
    {
      n: ['biohazard', 'biohazard sign'],
      u: '2623-fe0f',
      a: '1.0'
    },
    {
      n: ['arrow up', 'upwards black arrow'],
      u: '2b06-fe0f',
      a: '0.6'
    },
    {
      n: ['north east arrow', 'arrow upper right'],
      u: '2197-fe0f',
      a: '0.6'
    },
    {
      n: ['arrow right', 'black rightwards arrow'],
      u: '27a1-fe0f',
      a: '0.6'
    },
    {
      n: ['south east arrow', 'arrow lower right'],
      u: '2198-fe0f',
      a: '0.6'
    },
    {
      n: ['arrow down', 'downwards black arrow'],
      u: '2b07-fe0f',
      a: '0.6'
    },
    {
      n: ['south west arrow', 'arrow lower left'],
      u: '2199-fe0f',
      a: '0.6'
    },
    {
      n: ['arrow left', 'leftwards black arrow'],
      u: '2b05-fe0f',
      a: '0.6'
    },
    {
      n: ['north west arrow', 'arrow upper left'],
      u: '2196-fe0f',
      a: '0.6'
    },
    {
      n: ['up down arrow', 'arrow up down'],
      u: '2195-fe0f',
      a: '0.6'
    },
    {
      n: ['left right arrow'],
      u: '2194-fe0f',
      a: '0.6'
    },
    {
      n: ['leftwards arrow with hook'],
      u: '21a9-fe0f',
      a: '0.6'
    },
    {
      n: ['arrow right hook', 'rightwards arrow with hook'],
      u: '21aa-fe0f',
      a: '0.6'
    },
    {
      n: ['arrow heading up', 'arrow pointing rightwards then curving upwards'],
      u: '2934-fe0f',
      a: '0.6'
    },
    {
      n: [
        'arrow heading down',
        'arrow pointing rightwards then curving downwards'
      ],
      u: '2935-fe0f',
      a: '0.6'
    },
    {
      n: [
        'arrows clockwise',
        'clockwise downwards and upwards open circle arrows'
      ],
      u: '1f503',
      a: '0.6'
    },
    {
      n: [
        'arrows counterclockwise',
        'anticlockwise downwards and upwards open circle arrows'
      ],
      u: '1f504',
      a: '1.0'
    },
    {
      n: ['back', 'back with leftwards arrow above'],
      u: '1f519',
      a: '0.6'
    },
    {
      n: ['end', 'end with leftwards arrow above'],
      u: '1f51a',
      a: '0.6'
    },
    {
      n: ['on', 'on with exclamation mark with left right arrow above'],
      u: '1f51b',
      a: '0.6'
    },
    {
      n: ['soon', 'soon with rightwards arrow above'],
      u: '1f51c',
      a: '0.6'
    },
    {
      n: ['top', 'top with upwards arrow above'],
      u: '1f51d',
      a: '0.6'
    },
    {
      n: ['place of worship'],
      u: '1f6d0',
      a: '1.0'
    },
    {
      n: ['atom symbol'],
      u: '269b-fe0f',
      a: '1.0'
    },
    {
      n: ['om', 'om symbol'],
      u: '1f549-fe0f',
      a: '0.7'
    },
    {
      n: ['star of david'],
      u: '2721-fe0f',
      a: '0.7'
    },
    {
      n: ['wheel of dharma'],
      u: '2638-fe0f',
      a: '0.7'
    },
    {
      n: ['yin yang'],
      u: '262f-fe0f',
      a: '0.7'
    },
    {
      n: ['latin cross'],
      u: '271d-fe0f',
      a: '0.7'
    },
    {
      n: ['orthodox cross'],
      u: '2626-fe0f',
      a: '1.0'
    },
    {
      n: ['star and crescent'],
      u: '262a-fe0f',
      a: '0.7'
    },
    {
      n: ['peace symbol'],
      u: '262e-fe0f',
      a: '1.0'
    },
    {
      n: ['menorah with nine branches'],
      u: '1f54e',
      a: '1.0'
    },
    {
      n: ['six pointed star', 'six pointed star with middle dot'],
      u: '1f52f',
      a: '0.6'
    },
    {
      n: ['aries'],
      u: '2648',
      a: '0.6'
    },
    {
      n: ['taurus'],
      u: '2649',
      a: '0.6'
    },
    {
      n: ['gemini'],
      u: '264a',
      a: '0.6'
    },
    {
      n: ['cancer'],
      u: '264b',
      a: '0.6'
    },
    {
      n: ['leo'],
      u: '264c',
      a: '0.6'
    },
    {
      n: ['virgo'],
      u: '264d',
      a: '0.6'
    },
    {
      n: ['libra'],
      u: '264e',
      a: '0.6'
    },
    {
      n: ['scorpius'],
      u: '264f',
      a: '0.6'
    },
    {
      n: ['sagittarius'],
      u: '2650',
      a: '0.6'
    },
    {
      n: ['capricorn'],
      u: '2651',
      a: '0.6'
    },
    {
      n: ['aquarius'],
      u: '2652',
      a: '0.6'
    },
    {
      n: ['pisces'],
      u: '2653',
      a: '0.6'
    },
    {
      n: ['ophiuchus'],
      u: '26ce',
      a: '0.6'
    },
    {
      n: ['twisted rightwards arrows'],
      u: '1f500',
      a: '1.0'
    },
    {
      n: ['repeat', 'clockwise rightwards and leftwards open circle arrows'],
      u: '1f501',
      a: '1.0'
    },
    {
      n: [
        'repeat one',
        'clockwise rightwards and leftwards open circle arrows with circled one overlay'
      ],
      u: '1f502',
      a: '1.0'
    },
    {
      n: ['arrow forward', 'black right-pointing triangle'],
      u: '25b6-fe0f',
      a: '0.6'
    },
    {
      n: ['fast forward', 'black right-pointing double triangle'],
      u: '23e9',
      a: '0.6'
    },
    {
      n: [
        'next track button',
        'black right pointing double triangle with vertical bar'
      ],
      u: '23ed-fe0f',
      a: '0.7'
    },
    {
      n: [
        'play or pause button',
        'black right pointing triangle with double vertical bar'
      ],
      u: '23ef-fe0f',
      a: '1.0'
    },
    {
      n: ['arrow backward', 'black left-pointing triangle'],
      u: '25c0-fe0f',
      a: '0.6'
    },
    {
      n: ['rewind', 'black left-pointing double triangle'],
      u: '23ea',
      a: '0.6'
    },
    {
      n: [
        'last track button',
        'black left pointing double triangle with vertical bar'
      ],
      u: '23ee-fe0f',
      a: '0.7'
    },
    {
      n: ['arrow up small', 'up-pointing small red triangle'],
      u: '1f53c',
      a: '0.6'
    },
    {
      n: ['arrow double up', 'black up-pointing double triangle'],
      u: '23eb',
      a: '0.6'
    },
    {
      n: ['arrow down small', 'down-pointing small red triangle'],
      u: '1f53d',
      a: '0.6'
    },
    {
      n: ['arrow double down', 'black down-pointing double triangle'],
      u: '23ec',
      a: '0.6'
    },
    {
      n: ['pause button', 'double vertical bar'],
      u: '23f8-fe0f',
      a: '0.7'
    },
    {
      n: ['stop button', 'black square for stop'],
      u: '23f9-fe0f',
      a: '0.7'
    },
    {
      n: ['record button', 'black circle for record'],
      u: '23fa-fe0f',
      a: '0.7'
    },
    {
      n: ['eject', 'eject button'],
      u: '23cf-fe0f',
      a: '1.0'
    },
    {
      n: ['cinema'],
      u: '1f3a6',
      a: '0.6'
    },
    {
      n: ['low brightness', 'low brightness symbol'],
      u: '1f505',
      a: '1.0'
    },
    {
      n: ['high brightness', 'high brightness symbol'],
      u: '1f506',
      a: '1.0'
    },
    {
      n: ['signal strength', 'antenna with bars'],
      u: '1f4f6',
      a: '0.6'
    },
    {
      n: ['vibration mode'],
      u: '1f4f3',
      a: '0.6'
    },
    {
      n: ['mobile phone off'],
      u: '1f4f4',
      a: '0.6'
    },
    {
      n: ['female sign'],
      u: '2640-fe0f',
      a: '4.0'
    },
    {
      n: ['male sign'],
      u: '2642-fe0f',
      a: '4.0'
    },
    {
      n: ['transgender symbol'],
      u: '26a7-fe0f',
      a: '13.0'
    },
    {
      n: ['heavy multiplication x'],
      u: '2716-fe0f',
      a: '0.6'
    },
    {
      n: ['heavy plus sign'],
      u: '2795',
      a: '0.6'
    },
    {
      n: ['heavy minus sign'],
      u: '2796',
      a: '0.6'
    },
    {
      n: ['heavy division sign'],
      u: '2797',
      a: '0.6'
    },
    {
      n: ['heavy equals sign'],
      u: '1f7f0',
      a: '14.0'
    },
    {
      n: ['infinity'],
      u: '267e-fe0f',
      a: '11.0'
    },
    {
      n: ['bangbang', 'double exclamation mark'],
      u: '203c-fe0f',
      a: '0.6'
    },
    {
      n: ['interrobang', 'exclamation question mark'],
      u: '2049-fe0f',
      a: '0.6'
    },
    {
      n: ['question', 'black question mark ornament'],
      u: '2753',
      a: '0.6'
    },
    {
      n: ['grey question', 'white question mark ornament'],
      u: '2754',
      a: '0.6'
    },
    {
      n: ['grey exclamation', 'white exclamation mark ornament'],
      u: '2755',
      a: '0.6'
    },
    {
      n: [
        'exclamation',
        'heavy exclamation mark',
        'heavy exclamation mark symbol'
      ],
      u: '2757',
      a: '0.6'
    },
    {
      n: ['wavy dash'],
      u: '3030-fe0f',
      a: '0.6'
    },
    {
      n: ['currency exchange'],
      u: '1f4b1',
      a: '0.6'
    },
    {
      n: ['heavy dollar sign'],
      u: '1f4b2',
      a: '0.6'
    },
    {
      n: ['medical symbol', 'staff of aesculapius'],
      u: '2695-fe0f',
      a: '4.0'
    },
    {
      n: ['recycle', 'black universal recycling symbol'],
      u: '267b-fe0f',
      a: '0.6'
    },
    {
      n: ['fleur-de-lis', 'fleur de lis'],
      u: '269c-fe0f',
      a: '1.0'
    },
    {
      n: ['trident', 'trident emblem'],
      u: '1f531',
      a: '0.6'
    },
    {
      n: ['name badge'],
      u: '1f4db',
      a: '0.6'
    },
    {
      n: ['beginner', 'japanese symbol for beginner'],
      u: '1f530',
      a: '0.6'
    },
    {
      n: ['o', 'heavy large circle'],
      u: '2b55',
      a: '0.6'
    },
    {
      n: ['white check mark', 'white heavy check mark'],
      u: '2705',
      a: '0.6'
    },
    {
      n: ['ballot box with check'],
      u: '2611-fe0f',
      a: '0.6'
    },
    {
      n: ['heavy check mark'],
      u: '2714-fe0f',
      a: '0.6'
    },
    {
      n: ['x', 'cross mark'],
      u: '274c',
      a: '0.6'
    },
    {
      n: ['negative squared cross mark'],
      u: '274e',
      a: '0.6'
    },
    {
      n: ['curly loop'],
      u: '27b0',
      a: '0.6'
    },
    {
      n: ['loop', 'double curly loop'],
      u: '27bf',
      a: '1.0'
    },
    {
      n: ['part alternation mark'],
      u: '303d-fe0f',
      a: '0.6'
    },
    {
      n: ['eight spoked asterisk'],
      u: '2733-fe0f',
      a: '0.6'
    },
    {
      n: ['eight pointed black star'],
      u: '2734-fe0f',
      a: '0.6'
    },
    {
      n: ['sparkle'],
      u: '2747-fe0f',
      a: '0.6'
    },
    {
      n: ['copyright', 'copyright sign'],
      u: '00a9-fe0f',
      a: '0.6'
    },
    {
      n: ['registered', 'registered sign'],
      u: '00ae-fe0f',
      a: '0.6'
    },
    {
      n: ['tm', 'trade mark sign'],
      u: '2122-fe0f',
      a: '0.6'
    },
    {
      n: ['hash', 'hash key'],
      u: '0023-fe0f-20e3',
      a: '0.6'
    },
    {
      n: ['keycap: *', 'keycap star'],
      u: '002a-fe0f-20e3',
      a: '2.0'
    },
    {
      n: ['zero', 'keycap 0'],
      u: '0030-fe0f-20e3',
      a: '0.6'
    },
    {
      n: ['one', 'keycap 1'],
      u: '0031-fe0f-20e3',
      a: '0.6'
    },
    {
      n: ['two', 'keycap 2'],
      u: '0032-fe0f-20e3',
      a: '0.6'
    },
    {
      n: ['three', 'keycap 3'],
      u: '0033-fe0f-20e3',
      a: '0.6'
    },
    {
      n: ['four', 'keycap 4'],
      u: '0034-fe0f-20e3',
      a: '0.6'
    },
    {
      n: ['five', 'keycap 5'],
      u: '0035-fe0f-20e3',
      a: '0.6'
    },
    {
      n: ['six', 'keycap 6'],
      u: '0036-fe0f-20e3',
      a: '0.6'
    },
    {
      n: ['seven', 'keycap 7'],
      u: '0037-fe0f-20e3',
      a: '0.6'
    },
    {
      n: ['eight', 'keycap 8'],
      u: '0038-fe0f-20e3',
      a: '0.6'
    },
    {
      n: ['nine', 'keycap 9'],
      u: '0039-fe0f-20e3',
      a: '0.6'
    },
    {
      n: ['keycap ten'],
      u: '1f51f',
      a: '0.6'
    },
    {
      n: ['capital abcd', 'input symbol for latin capital letters'],
      u: '1f520',
      a: '0.6'
    },
    {
      n: ['abcd', 'input symbol for latin small letters'],
      u: '1f521',
      a: '0.6'
    },
    {
      n: ['1234', 'input symbol for numbers'],
      u: '1f522',
      a: '0.6'
    },
    {
      n: ['symbols', 'input symbol for symbols'],
      u: '1f523',
      a: '0.6'
    },
    {
      n: ['abc', 'input symbol for latin letters'],
      u: '1f524',
      a: '0.6'
    },
    {
      n: ['a', 'negative squared latin capital letter a'],
      u: '1f170-fe0f',
      a: '0.6'
    },
    {
      n: ['ab', 'negative squared ab'],
      u: '1f18e',
      a: '0.6'
    },
    {
      n: ['b', 'negative squared latin capital letter b'],
      u: '1f171-fe0f',
      a: '0.6'
    },
    {
      n: ['cl', 'squared cl'],
      u: '1f191',
      a: '0.6'
    },
    {
      n: ['cool', 'squared cool'],
      u: '1f192',
      a: '0.6'
    },
    {
      n: ['free', 'squared free'],
      u: '1f193',
      a: '0.6'
    },
    {
      n: ['information source'],
      u: '2139-fe0f',
      a: '0.6'
    },
    {
      n: ['id', 'squared id'],
      u: '1f194',
      a: '0.6'
    },
    {
      n: ['m', 'circled latin capital letter m'],
      u: '24c2-fe0f',
      a: '0.6'
    },
    {
      n: ['new', 'squared new'],
      u: '1f195',
      a: '0.6'
    },
    {
      n: ['ng', 'squared ng'],
      u: '1f196',
      a: '0.6'
    },
    {
      n: ['o2', 'negative squared latin capital letter o'],
      u: '1f17e-fe0f',
      a: '0.6'
    },
    {
      n: ['ok', 'squared ok'],
      u: '1f197',
      a: '0.6'
    },
    {
      n: ['parking', 'negative squared latin capital letter p'],
      u: '1f17f-fe0f',
      a: '0.6'
    },
    {
      n: ['sos', 'squared sos'],
      u: '1f198',
      a: '0.6'
    },
    {
      n: ['up', 'squared up with exclamation mark'],
      u: '1f199',
      a: '0.6'
    },
    {
      n: ['vs', 'squared vs'],
      u: '1f19a',
      a: '0.6'
    },
    {
      n: ['koko', 'squared katakana koko'],
      u: '1f201',
      a: '0.6'
    },
    {
      n: ['sa', 'squared katakana sa'],
      u: '1f202-fe0f',
      a: '0.6'
    },
    {
      n: ['u6708', 'squared cjk unified ideograph-6708'],
      u: '1f237-fe0f',
      a: '0.6'
    },
    {
      n: ['u6709', 'squared cjk unified ideograph-6709'],
      u: '1f236',
      a: '0.6'
    },
    {
      n: ['u6307', 'squared cjk unified ideograph-6307'],
      u: '1f22f',
      a: '0.6'
    },
    {
      n: ['ideograph advantage', 'circled ideograph advantage'],
      u: '1f250',
      a: '0.6'
    },
    {
      n: ['u5272', 'squared cjk unified ideograph-5272'],
      u: '1f239',
      a: '0.6'
    },
    {
      n: ['u7121', 'squared cjk unified ideograph-7121'],
      u: '1f21a',
      a: '0.6'
    },
    {
      n: ['u7981', 'squared cjk unified ideograph-7981'],
      u: '1f232',
      a: '0.6'
    },
    {
      n: ['accept', 'circled ideograph accept'],
      u: '1f251',
      a: '0.6'
    },
    {
      n: ['u7533', 'squared cjk unified ideograph-7533'],
      u: '1f238',
      a: '0.6'
    },
    {
      n: ['u5408', 'squared cjk unified ideograph-5408'],
      u: '1f234',
      a: '0.6'
    },
    {
      n: ['u7a7a', 'squared cjk unified ideograph-7a7a'],
      u: '1f233',
      a: '0.6'
    },
    {
      n: ['congratulations', 'circled ideograph congratulation'],
      u: '3297-fe0f',
      a: '0.6'
    },
    {
      n: ['secret', 'circled ideograph secret'],
      u: '3299-fe0f',
      a: '0.6'
    },
    {
      n: ['u55b6', 'squared cjk unified ideograph-55b6'],
      u: '1f23a',
      a: '0.6'
    },
    {
      n: ['u6e80', 'squared cjk unified ideograph-6e80'],
      u: '1f235',
      a: '0.6'
    },
    {
      n: ['red circle', 'large red circle'],
      u: '1f534',
      a: '0.6'
    },
    {
      n: ['large orange circle'],
      u: '1f7e0',
      a: '12.0'
    },
    {
      n: ['large yellow circle'],
      u: '1f7e1',
      a: '12.0'
    },
    {
      n: ['large green circle'],
      u: '1f7e2',
      a: '12.0'
    },
    {
      n: ['large blue circle'],
      u: '1f535',
      a: '0.6'
    },
    {
      n: ['large purple circle'],
      u: '1f7e3',
      a: '12.0'
    },
    {
      n: ['large brown circle'],
      u: '1f7e4',
      a: '12.0'
    },
    {
      n: ['black circle', 'medium black circle'],
      u: '26ab',
      a: '0.6'
    },
    {
      n: ['white circle', 'medium white circle'],
      u: '26aa',
      a: '0.6'
    },
    {
      n: ['large red square'],
      u: '1f7e5',
      a: '12.0'
    },
    {
      n: ['large orange square'],
      u: '1f7e7',
      a: '12.0'
    },
    {
      n: ['large yellow square'],
      u: '1f7e8',
      a: '12.0'
    },
    {
      n: ['large green square'],
      u: '1f7e9',
      a: '12.0'
    },
    {
      n: ['large blue square'],
      u: '1f7e6',
      a: '12.0'
    },
    {
      n: ['large purple square'],
      u: '1f7ea',
      a: '12.0'
    },
    {
      n: ['large brown square'],
      u: '1f7eb',
      a: '12.0'
    },
    {
      n: ['black large square'],
      u: '2b1b',
      a: '0.6'
    },
    {
      n: ['white large square'],
      u: '2b1c',
      a: '0.6'
    },
    {
      n: ['black medium square'],
      u: '25fc-fe0f',
      a: '0.6'
    },
    {
      n: ['white medium square'],
      u: '25fb-fe0f',
      a: '0.6'
    },
    {
      n: ['black medium small square'],
      u: '25fe',
      a: '0.6'
    },
    {
      n: ['white medium small square'],
      u: '25fd',
      a: '0.6'
    },
    {
      n: ['black small square'],
      u: '25aa-fe0f',
      a: '0.6'
    },
    {
      n: ['white small square'],
      u: '25ab-fe0f',
      a: '0.6'
    },
    {
      n: ['large orange diamond'],
      u: '1f536',
      a: '0.6'
    },
    {
      n: ['large blue diamond'],
      u: '1f537',
      a: '0.6'
    },
    {
      n: ['small orange diamond'],
      u: '1f538',
      a: '0.6'
    },
    {
      n: ['small blue diamond'],
      u: '1f539',
      a: '0.6'
    },
    {
      n: ['small red triangle', 'up-pointing red triangle'],
      u: '1f53a',
      a: '0.6'
    },
    {
      n: ['small red triangle down', 'down-pointing red triangle'],
      u: '1f53b',
      a: '0.6'
    },
    {
      n: ['diamond shape with a dot inside'],
      u: '1f4a0',
      a: '0.6'
    },
    {
      n: ['radio button'],
      u: '1f518',
      a: '0.6'
    },
    {
      n: ['white square button'],
      u: '1f533',
      a: '0.6'
    },
    {
      n: ['black square button'],
      u: '1f532',
      a: '0.6'
    }
  ],
  旗帜: [
    {
      n: ['chequered flag', 'checkered flag'],
      u: '1f3c1',
      a: '0.6'
    },
    {
      n: ['triangular flag on post'],
      u: '1f6a9',
      a: '0.6'
    },
    {
      n: ['crossed flags'],
      u: '1f38c',
      a: '0.6'
    },
    {
      n: ['waving black flag'],
      u: '1f3f4',
      a: '1.0'
    },
    {
      n: ['white flag', 'waving white flag'],
      u: '1f3f3-fe0f',
      a: '0.7'
    },
    {
      n: ['rainbow flag', 'rainbow-flag'],
      u: '1f3f3-fe0f-200d-1f308',
      a: '4.0'
    },
    {
      n: ['transgender flag'],
      u: '1f3f3-fe0f-200d-26a7-fe0f',
      a: '13.0'
    },
    {
      n: ['pirate flag'],
      u: '1f3f4-200d-2620-fe0f',
      a: '11.0'
    },
    {
      n: ['flag-ac', 'ascension island flag'],
      u: '1f1e6-1f1e8',
      a: '2.0'
    },
    {
      n: ['flag-ad', 'andorra flag'],
      u: '1f1e6-1f1e9',
      a: '2.0'
    },
    {
      n: ['flag-ae', 'united arab emirates flag'],
      u: '1f1e6-1f1ea',
      a: '2.0'
    },
    {
      n: ['flag-af', 'afghanistan flag'],
      u: '1f1e6-1f1eb',
      a: '2.0'
    },
    {
      n: ['flag-ag', 'antigua & barbuda flag'],
      u: '1f1e6-1f1ec',
      a: '2.0'
    },
    {
      n: ['flag-ai', 'anguilla flag'],
      u: '1f1e6-1f1ee',
      a: '2.0'
    },
    {
      n: ['flag-al', 'albania flag'],
      u: '1f1e6-1f1f1',
      a: '2.0'
    },
    {
      n: ['flag-am', 'armenia flag'],
      u: '1f1e6-1f1f2',
      a: '2.0'
    },
    {
      n: ['flag-ao', 'angola flag'],
      u: '1f1e6-1f1f4',
      a: '2.0'
    },
    {
      n: ['flag-aq', 'antarctica flag'],
      u: '1f1e6-1f1f6',
      a: '2.0'
    },
    {
      n: ['flag-ar', 'argentina flag'],
      u: '1f1e6-1f1f7',
      a: '2.0'
    },
    {
      n: ['flag-as', 'american samoa flag'],
      u: '1f1e6-1f1f8',
      a: '2.0'
    },
    {
      n: ['flag-at', 'austria flag'],
      u: '1f1e6-1f1f9',
      a: '2.0'
    },
    {
      n: ['flag-au', 'australia flag'],
      u: '1f1e6-1f1fa',
      a: '2.0'
    },
    {
      n: ['flag-aw', 'aruba flag'],
      u: '1f1e6-1f1fc',
      a: '2.0'
    },
    {
      n: ['flag-ax', 'åland islands flag'],
      u: '1f1e6-1f1fd',
      a: '2.0'
    },
    {
      n: ['flag-az', 'azerbaijan flag'],
      u: '1f1e6-1f1ff',
      a: '2.0'
    },
    {
      n: ['flag-ba', 'bosnia & herzegovina flag'],
      u: '1f1e7-1f1e6',
      a: '2.0'
    },
    {
      n: ['flag-bb', 'barbados flag'],
      u: '1f1e7-1f1e7',
      a: '2.0'
    },
    {
      n: ['flag-bd', 'bangladesh flag'],
      u: '1f1e7-1f1e9',
      a: '2.0'
    },
    {
      n: ['flag-be', 'belgium flag'],
      u: '1f1e7-1f1ea',
      a: '2.0'
    },
    {
      n: ['flag-bf', 'burkina faso flag'],
      u: '1f1e7-1f1eb',
      a: '2.0'
    },
    {
      n: ['flag-bg', 'bulgaria flag'],
      u: '1f1e7-1f1ec',
      a: '2.0'
    },
    {
      n: ['flag-bh', 'bahrain flag'],
      u: '1f1e7-1f1ed',
      a: '2.0'
    },
    {
      n: ['flag-bi', 'burundi flag'],
      u: '1f1e7-1f1ee',
      a: '2.0'
    },
    {
      n: ['flag-bj', 'benin flag'],
      u: '1f1e7-1f1ef',
      a: '2.0'
    },
    {
      n: ['flag-bl', 'st. barthélemy flag'],
      u: '1f1e7-1f1f1',
      a: '2.0'
    },
    {
      n: ['flag-bm', 'bermuda flag'],
      u: '1f1e7-1f1f2',
      a: '2.0'
    },
    {
      n: ['flag-bn', 'brunei flag'],
      u: '1f1e7-1f1f3',
      a: '2.0'
    },
    {
      n: ['flag-bo', 'bolivia flag'],
      u: '1f1e7-1f1f4',
      a: '2.0'
    },
    {
      n: ['flag-bq', 'caribbean netherlands flag'],
      u: '1f1e7-1f1f6',
      a: '2.0'
    },
    {
      n: ['flag-br', 'brazil flag'],
      u: '1f1e7-1f1f7',
      a: '2.0'
    },
    {
      n: ['flag-bs', 'bahamas flag'],
      u: '1f1e7-1f1f8',
      a: '2.0'
    },
    {
      n: ['flag-bt', 'bhutan flag'],
      u: '1f1e7-1f1f9',
      a: '2.0'
    },
    {
      n: ['flag-bv', 'bouvet island flag'],
      u: '1f1e7-1f1fb',
      a: '2.0'
    },
    {
      n: ['flag-bw', 'botswana flag'],
      u: '1f1e7-1f1fc',
      a: '2.0'
    },
    {
      n: ['flag-by', 'belarus flag'],
      u: '1f1e7-1f1fe',
      a: '2.0'
    },
    {
      n: ['flag-bz', 'belize flag'],
      u: '1f1e7-1f1ff',
      a: '2.0'
    },
    {
      n: ['flag-ca', 'canada flag'],
      u: '1f1e8-1f1e6',
      a: '2.0'
    },
    {
      n: ['flag-cc', 'cocos (keeling) islands flag'],
      u: '1f1e8-1f1e8',
      a: '2.0'
    },
    {
      n: ['flag-cd', 'congo - kinshasa flag'],
      u: '1f1e8-1f1e9',
      a: '2.0'
    },
    {
      n: ['flag-cf', 'central african republic flag'],
      u: '1f1e8-1f1eb',
      a: '2.0'
    },
    {
      n: ['flag-cg', 'congo - brazzaville flag'],
      u: '1f1e8-1f1ec',
      a: '2.0'
    },
    {
      n: ['flag-ch', 'switzerland flag'],
      u: '1f1e8-1f1ed',
      a: '2.0'
    },
    {
      n: ['flag-ci', 'côte d’ivoire flag'],
      u: '1f1e8-1f1ee',
      a: '2.0'
    },
    {
      n: ['flag-ck', 'cook islands flag'],
      u: '1f1e8-1f1f0',
      a: '2.0'
    },
    {
      n: ['flag-cl', 'chile flag'],
      u: '1f1e8-1f1f1',
      a: '2.0'
    },
    {
      n: ['flag-cm', 'cameroon flag'],
      u: '1f1e8-1f1f2',
      a: '2.0'
    },
    {
      n: ['cn', 'flag-cn', 'china flag'],
      u: '1f1e8-1f1f3',
      a: '0.6'
    },
    {
      n: ['flag-co', 'colombia flag'],
      u: '1f1e8-1f1f4',
      a: '2.0'
    },
    {
      n: ['flag-cp', 'clipperton island flag'],
      u: '1f1e8-1f1f5',
      a: '2.0'
    },
    {
      n: ['flag-cr', 'costa rica flag'],
      u: '1f1e8-1f1f7',
      a: '2.0'
    },
    {
      n: ['flag-cu', 'cuba flag'],
      u: '1f1e8-1f1fa',
      a: '2.0'
    },
    {
      n: ['flag-cv', 'cape verde flag'],
      u: '1f1e8-1f1fb',
      a: '2.0'
    },
    {
      n: ['flag-cw', 'curaçao flag'],
      u: '1f1e8-1f1fc',
      a: '2.0'
    },
    {
      n: ['flag-cx', 'christmas island flag'],
      u: '1f1e8-1f1fd',
      a: '2.0'
    },
    {
      n: ['flag-cy', 'cyprus flag'],
      u: '1f1e8-1f1fe',
      a: '2.0'
    },
    {
      n: ['flag-cz', 'czechia flag'],
      u: '1f1e8-1f1ff',
      a: '2.0'
    },
    {
      n: ['de', 'flag-de', 'germany flag'],
      u: '1f1e9-1f1ea',
      a: '0.6'
    },
    {
      n: ['flag-dg', 'diego garcia flag'],
      u: '1f1e9-1f1ec',
      a: '2.0'
    },
    {
      n: ['flag-dj', 'djibouti flag'],
      u: '1f1e9-1f1ef',
      a: '2.0'
    },
    {
      n: ['flag-dk', 'denmark flag'],
      u: '1f1e9-1f1f0',
      a: '2.0'
    },
    {
      n: ['flag-dm', 'dominica flag'],
      u: '1f1e9-1f1f2',
      a: '2.0'
    },
    {
      n: ['flag-do', 'dominican republic flag'],
      u: '1f1e9-1f1f4',
      a: '2.0'
    },
    {
      n: ['flag-dz', 'algeria flag'],
      u: '1f1e9-1f1ff',
      a: '2.0'
    },
    {
      n: ['flag-ea', 'ceuta & melilla flag'],
      u: '1f1ea-1f1e6',
      a: '2.0'
    },
    {
      n: ['flag-ec', 'ecuador flag'],
      u: '1f1ea-1f1e8',
      a: '2.0'
    },
    {
      n: ['flag-ee', 'estonia flag'],
      u: '1f1ea-1f1ea',
      a: '2.0'
    },
    {
      n: ['flag-eg', 'egypt flag'],
      u: '1f1ea-1f1ec',
      a: '2.0'
    },
    {
      n: ['flag-eh', 'western sahara flag'],
      u: '1f1ea-1f1ed',
      a: '2.0'
    },
    {
      n: ['flag-er', 'eritrea flag'],
      u: '1f1ea-1f1f7',
      a: '2.0'
    },
    {
      n: ['es', 'flag-es', 'spain flag'],
      u: '1f1ea-1f1f8',
      a: '0.6'
    },
    {
      n: ['flag-et', 'ethiopia flag'],
      u: '1f1ea-1f1f9',
      a: '2.0'
    },
    {
      n: ['flag-eu', 'european union flag'],
      u: '1f1ea-1f1fa',
      a: '2.0'
    },
    {
      n: ['flag-fi', 'finland flag'],
      u: '1f1eb-1f1ee',
      a: '2.0'
    },
    {
      n: ['flag-fj', 'fiji flag'],
      u: '1f1eb-1f1ef',
      a: '2.0'
    },
    {
      n: ['flag-fk', 'falkland islands flag'],
      u: '1f1eb-1f1f0',
      a: '2.0'
    },
    {
      n: ['flag-fm', 'micronesia flag'],
      u: '1f1eb-1f1f2',
      a: '2.0'
    },
    {
      n: ['flag-fo', 'faroe islands flag'],
      u: '1f1eb-1f1f4',
      a: '2.0'
    },
    {
      n: ['fr', 'flag-fr', 'france flag'],
      u: '1f1eb-1f1f7',
      a: '0.6'
    },
    {
      n: ['flag-ga', 'gabon flag'],
      u: '1f1ec-1f1e6',
      a: '2.0'
    },
    {
      n: ['gb', 'uk', 'flag-gb', 'united kingdom flag'],
      u: '1f1ec-1f1e7',
      a: '0.6'
    },
    {
      n: ['flag-gd', 'grenada flag'],
      u: '1f1ec-1f1e9',
      a: '2.0'
    },
    {
      n: ['flag-ge', 'georgia flag'],
      u: '1f1ec-1f1ea',
      a: '2.0'
    },
    {
      n: ['flag-gf', 'french guiana flag'],
      u: '1f1ec-1f1eb',
      a: '2.0'
    },
    {
      n: ['flag-gg', 'guernsey flag'],
      u: '1f1ec-1f1ec',
      a: '2.0'
    },
    {
      n: ['flag-gh', 'ghana flag'],
      u: '1f1ec-1f1ed',
      a: '2.0'
    },
    {
      n: ['flag-gi', 'gibraltar flag'],
      u: '1f1ec-1f1ee',
      a: '2.0'
    },
    {
      n: ['flag-gl', 'greenland flag'],
      u: '1f1ec-1f1f1',
      a: '2.0'
    },
    {
      n: ['flag-gm', 'gambia flag'],
      u: '1f1ec-1f1f2',
      a: '2.0'
    },
    {
      n: ['flag-gn', 'guinea flag'],
      u: '1f1ec-1f1f3',
      a: '2.0'
    },
    {
      n: ['flag-gp', 'guadeloupe flag'],
      u: '1f1ec-1f1f5',
      a: '2.0'
    },
    {
      n: ['flag-gq', 'equatorial guinea flag'],
      u: '1f1ec-1f1f6',
      a: '2.0'
    },
    {
      n: ['flag-gr', 'greece flag'],
      u: '1f1ec-1f1f7',
      a: '2.0'
    },
    {
      n: ['flag-gs', 'south georgia & south sandwich islands flag'],
      u: '1f1ec-1f1f8',
      a: '2.0'
    },
    {
      n: ['flag-gt', 'guatemala flag'],
      u: '1f1ec-1f1f9',
      a: '2.0'
    },
    {
      n: ['flag-gu', 'guam flag'],
      u: '1f1ec-1f1fa',
      a: '2.0'
    },
    {
      n: ['flag-gw', 'guinea-bissau flag'],
      u: '1f1ec-1f1fc',
      a: '2.0'
    },
    {
      n: ['flag-gy', 'guyana flag'],
      u: '1f1ec-1f1fe',
      a: '2.0'
    },
    {
      n: ['flag-hk', 'hong kong sar china flag'],
      u: '1f1ed-1f1f0',
      a: '2.0'
    },
    {
      n: ['flag-hm', 'heard & mcdonald islands flag'],
      u: '1f1ed-1f1f2',
      a: '2.0'
    },
    {
      n: ['flag-hn', 'honduras flag'],
      u: '1f1ed-1f1f3',
      a: '2.0'
    },
    {
      n: ['flag-hr', 'croatia flag'],
      u: '1f1ed-1f1f7',
      a: '2.0'
    },
    {
      n: ['flag-ht', 'haiti flag'],
      u: '1f1ed-1f1f9',
      a: '2.0'
    },
    {
      n: ['flag-hu', 'hungary flag'],
      u: '1f1ed-1f1fa',
      a: '2.0'
    },
    {
      n: ['flag-ic', 'canary islands flag'],
      u: '1f1ee-1f1e8',
      a: '2.0'
    },
    {
      n: ['flag-id', 'indonesia flag'],
      u: '1f1ee-1f1e9',
      a: '2.0'
    },
    {
      n: ['flag-ie', 'ireland flag'],
      u: '1f1ee-1f1ea',
      a: '2.0'
    },
    {
      n: ['flag-il', 'israel flag'],
      u: '1f1ee-1f1f1',
      a: '2.0'
    },
    {
      n: ['flag-im', 'isle of man flag'],
      u: '1f1ee-1f1f2',
      a: '2.0'
    },
    {
      n: ['flag-in', 'india flag'],
      u: '1f1ee-1f1f3',
      a: '2.0'
    },
    {
      n: ['flag-io', 'british indian ocean territory flag'],
      u: '1f1ee-1f1f4',
      a: '2.0'
    },
    {
      n: ['flag-iq', 'iraq flag'],
      u: '1f1ee-1f1f6',
      a: '2.0'
    },
    {
      n: ['flag-ir', 'iran flag'],
      u: '1f1ee-1f1f7',
      a: '2.0'
    },
    {
      n: ['flag-is', 'iceland flag'],
      u: '1f1ee-1f1f8',
      a: '2.0'
    },
    {
      n: ['it', 'flag-it', 'italy flag'],
      u: '1f1ee-1f1f9',
      a: '0.6'
    },
    {
      n: ['flag-je', 'jersey flag'],
      u: '1f1ef-1f1ea',
      a: '2.0'
    },
    {
      n: ['flag-jm', 'jamaica flag'],
      u: '1f1ef-1f1f2',
      a: '2.0'
    },
    {
      n: ['flag-jo', 'jordan flag'],
      u: '1f1ef-1f1f4',
      a: '2.0'
    },
    {
      n: ['jp', 'flag-jp', 'japan flag'],
      u: '1f1ef-1f1f5',
      a: '0.6'
    },
    {
      n: ['flag-ke', 'kenya flag'],
      u: '1f1f0-1f1ea',
      a: '2.0'
    },
    {
      n: ['flag-kg', 'kyrgyzstan flag'],
      u: '1f1f0-1f1ec',
      a: '2.0'
    },
    {
      n: ['flag-kh', 'cambodia flag'],
      u: '1f1f0-1f1ed',
      a: '2.0'
    },
    {
      n: ['flag-ki', 'kiribati flag'],
      u: '1f1f0-1f1ee',
      a: '2.0'
    },
    {
      n: ['flag-km', 'comoros flag'],
      u: '1f1f0-1f1f2',
      a: '2.0'
    },
    {
      n: ['flag-kn', 'st. kitts & nevis flag'],
      u: '1f1f0-1f1f3',
      a: '2.0'
    },
    {
      n: ['flag-kp', 'north korea flag'],
      u: '1f1f0-1f1f5',
      a: '2.0'
    },
    {
      n: ['kr', 'flag-kr', 'south korea flag'],
      u: '1f1f0-1f1f7',
      a: '0.6'
    },
    {
      n: ['flag-kw', 'kuwait flag'],
      u: '1f1f0-1f1fc',
      a: '2.0'
    },
    {
      n: ['flag-ky', 'cayman islands flag'],
      u: '1f1f0-1f1fe',
      a: '2.0'
    },
    {
      n: ['flag-kz', 'kazakhstan flag'],
      u: '1f1f0-1f1ff',
      a: '2.0'
    },
    {
      n: ['flag-la', 'laos flag'],
      u: '1f1f1-1f1e6',
      a: '2.0'
    },
    {
      n: ['flag-lb', 'lebanon flag'],
      u: '1f1f1-1f1e7',
      a: '2.0'
    },
    {
      n: ['flag-lc', 'st. lucia flag'],
      u: '1f1f1-1f1e8',
      a: '2.0'
    },
    {
      n: ['flag-li', 'liechtenstein flag'],
      u: '1f1f1-1f1ee',
      a: '2.0'
    },
    {
      n: ['flag-lk', 'sri lanka flag'],
      u: '1f1f1-1f1f0',
      a: '2.0'
    },
    {
      n: ['flag-lr', 'liberia flag'],
      u: '1f1f1-1f1f7',
      a: '2.0'
    },
    {
      n: ['flag-ls', 'lesotho flag'],
      u: '1f1f1-1f1f8',
      a: '2.0'
    },
    {
      n: ['flag-lt', 'lithuania flag'],
      u: '1f1f1-1f1f9',
      a: '2.0'
    },
    {
      n: ['flag-lu', 'luxembourg flag'],
      u: '1f1f1-1f1fa',
      a: '2.0'
    },
    {
      n: ['flag-lv', 'latvia flag'],
      u: '1f1f1-1f1fb',
      a: '2.0'
    },
    {
      n: ['flag-ly', 'libya flag'],
      u: '1f1f1-1f1fe',
      a: '2.0'
    },
    {
      n: ['flag-ma', 'morocco flag'],
      u: '1f1f2-1f1e6',
      a: '2.0'
    },
    {
      n: ['flag-mc', 'monaco flag'],
      u: '1f1f2-1f1e8',
      a: '2.0'
    },
    {
      n: ['flag-md', 'moldova flag'],
      u: '1f1f2-1f1e9',
      a: '2.0'
    },
    {
      n: ['flag-me', 'montenegro flag'],
      u: '1f1f2-1f1ea',
      a: '2.0'
    },
    {
      n: ['flag-mf', 'st. martin flag'],
      u: '1f1f2-1f1eb',
      a: '2.0'
    },
    {
      n: ['flag-mg', 'madagascar flag'],
      u: '1f1f2-1f1ec',
      a: '2.0'
    },
    {
      n: ['flag-mh', 'marshall islands flag'],
      u: '1f1f2-1f1ed',
      a: '2.0'
    },
    {
      n: ['flag-mk', 'north macedonia flag'],
      u: '1f1f2-1f1f0',
      a: '2.0'
    },
    {
      n: ['flag-ml', 'mali flag'],
      u: '1f1f2-1f1f1',
      a: '2.0'
    },
    {
      n: ['flag-mm', 'myanmar (burma) flag'],
      u: '1f1f2-1f1f2',
      a: '2.0'
    },
    {
      n: ['flag-mn', 'mongolia flag'],
      u: '1f1f2-1f1f3',
      a: '2.0'
    },
    {
      n: ['flag-mo', 'macao sar china flag'],
      u: '1f1f2-1f1f4',
      a: '2.0'
    },
    {
      n: ['flag-mp', 'northern mariana islands flag'],
      u: '1f1f2-1f1f5',
      a: '2.0'
    },
    {
      n: ['flag-mq', 'martinique flag'],
      u: '1f1f2-1f1f6',
      a: '2.0'
    },
    {
      n: ['flag-mr', 'mauritania flag'],
      u: '1f1f2-1f1f7',
      a: '2.0'
    },
    {
      n: ['flag-ms', 'montserrat flag'],
      u: '1f1f2-1f1f8',
      a: '2.0'
    },
    {
      n: ['flag-mt', 'malta flag'],
      u: '1f1f2-1f1f9',
      a: '2.0'
    },
    {
      n: ['flag-mu', 'mauritius flag'],
      u: '1f1f2-1f1fa',
      a: '2.0'
    },
    {
      n: ['flag-mv', 'maldives flag'],
      u: '1f1f2-1f1fb',
      a: '2.0'
    },
    {
      n: ['flag-mw', 'malawi flag'],
      u: '1f1f2-1f1fc',
      a: '2.0'
    },
    {
      n: ['flag-mx', 'mexico flag'],
      u: '1f1f2-1f1fd',
      a: '2.0'
    },
    {
      n: ['flag-my', 'malaysia flag'],
      u: '1f1f2-1f1fe',
      a: '2.0'
    },
    {
      n: ['flag-mz', 'mozambique flag'],
      u: '1f1f2-1f1ff',
      a: '2.0'
    },
    {
      n: ['flag-na', 'namibia flag'],
      u: '1f1f3-1f1e6',
      a: '2.0'
    },
    {
      n: ['flag-nc', 'new caledonia flag'],
      u: '1f1f3-1f1e8',
      a: '2.0'
    },
    {
      n: ['flag-ne', 'niger flag'],
      u: '1f1f3-1f1ea',
      a: '2.0'
    },
    {
      n: ['flag-nf', 'norfolk island flag'],
      u: '1f1f3-1f1eb',
      a: '2.0'
    },
    {
      n: ['flag-ng', 'nigeria flag'],
      u: '1f1f3-1f1ec',
      a: '2.0'
    },
    {
      n: ['flag-ni', 'nicaragua flag'],
      u: '1f1f3-1f1ee',
      a: '2.0'
    },
    {
      n: ['flag-nl', 'netherlands flag'],
      u: '1f1f3-1f1f1',
      a: '2.0'
    },
    {
      n: ['flag-no', 'norway flag'],
      u: '1f1f3-1f1f4',
      a: '2.0'
    },
    {
      n: ['flag-np', 'nepal flag'],
      u: '1f1f3-1f1f5',
      a: '2.0'
    },
    {
      n: ['flag-nr', 'nauru flag'],
      u: '1f1f3-1f1f7',
      a: '2.0'
    },
    {
      n: ['flag-nu', 'niue flag'],
      u: '1f1f3-1f1fa',
      a: '2.0'
    },
    {
      n: ['flag-nz', 'new zealand flag'],
      u: '1f1f3-1f1ff',
      a: '2.0'
    },
    {
      n: ['flag-om', 'oman flag'],
      u: '1f1f4-1f1f2',
      a: '2.0'
    },
    {
      n: ['flag-pa', 'panama flag'],
      u: '1f1f5-1f1e6',
      a: '2.0'
    },
    {
      n: ['flag-pe', 'peru flag'],
      u: '1f1f5-1f1ea',
      a: '2.0'
    },
    {
      n: ['flag-pf', 'french polynesia flag'],
      u: '1f1f5-1f1eb',
      a: '2.0'
    },
    {
      n: ['flag-pg', 'papua new guinea flag'],
      u: '1f1f5-1f1ec',
      a: '2.0'
    },
    {
      n: ['flag-ph', 'philippines flag'],
      u: '1f1f5-1f1ed',
      a: '2.0'
    },
    {
      n: ['flag-pk', 'pakistan flag'],
      u: '1f1f5-1f1f0',
      a: '2.0'
    },
    {
      n: ['flag-pl', 'poland flag'],
      u: '1f1f5-1f1f1',
      a: '2.0'
    },
    {
      n: ['flag-pm', 'st. pierre & miquelon flag'],
      u: '1f1f5-1f1f2',
      a: '2.0'
    },
    {
      n: ['flag-pn', 'pitcairn islands flag'],
      u: '1f1f5-1f1f3',
      a: '2.0'
    },
    {
      n: ['flag-pr', 'puerto rico flag'],
      u: '1f1f5-1f1f7',
      a: '2.0'
    },
    {
      n: ['flag-ps', 'palestinian territories flag'],
      u: '1f1f5-1f1f8',
      a: '2.0'
    },
    {
      n: ['flag-pt', 'portugal flag'],
      u: '1f1f5-1f1f9',
      a: '2.0'
    },
    {
      n: ['flag-pw', 'palau flag'],
      u: '1f1f5-1f1fc',
      a: '2.0'
    },
    {
      n: ['flag-py', 'paraguay flag'],
      u: '1f1f5-1f1fe',
      a: '2.0'
    },
    {
      n: ['flag-qa', 'qatar flag'],
      u: '1f1f6-1f1e6',
      a: '2.0'
    },
    {
      n: ['flag-re', 'réunion flag'],
      u: '1f1f7-1f1ea',
      a: '2.0'
    },
    {
      n: ['flag-ro', 'romania flag'],
      u: '1f1f7-1f1f4',
      a: '2.0'
    },
    {
      n: ['flag-rs', 'serbia flag'],
      u: '1f1f7-1f1f8',
      a: '2.0'
    },
    {
      n: ['ru', 'flag-ru', 'russia flag'],
      u: '1f1f7-1f1fa',
      a: '0.6'
    },
    {
      n: ['flag-rw', 'rwanda flag'],
      u: '1f1f7-1f1fc',
      a: '2.0'
    },
    {
      n: ['flag-sa', 'saudi arabia flag'],
      u: '1f1f8-1f1e6',
      a: '2.0'
    },
    {
      n: ['flag-sb', 'solomon islands flag'],
      u: '1f1f8-1f1e7',
      a: '2.0'
    },
    {
      n: ['flag-sc', 'seychelles flag'],
      u: '1f1f8-1f1e8',
      a: '2.0'
    },
    {
      n: ['flag-sd', 'sudan flag'],
      u: '1f1f8-1f1e9',
      a: '2.0'
    },
    {
      n: ['flag-se', 'sweden flag'],
      u: '1f1f8-1f1ea',
      a: '2.0'
    },
    {
      n: ['flag-sg', 'singapore flag'],
      u: '1f1f8-1f1ec',
      a: '2.0'
    },
    {
      n: ['flag-sh', 'st. helena flag'],
      u: '1f1f8-1f1ed',
      a: '2.0'
    },
    {
      n: ['flag-si', 'slovenia flag'],
      u: '1f1f8-1f1ee',
      a: '2.0'
    },
    {
      n: ['flag-sj', 'svalbard & jan mayen flag'],
      u: '1f1f8-1f1ef',
      a: '2.0'
    },
    {
      n: ['flag-sk', 'slovakia flag'],
      u: '1f1f8-1f1f0',
      a: '2.0'
    },
    {
      n: ['flag-sl', 'sierra leone flag'],
      u: '1f1f8-1f1f1',
      a: '2.0'
    },
    {
      n: ['flag-sm', 'san marino flag'],
      u: '1f1f8-1f1f2',
      a: '2.0'
    },
    {
      n: ['flag-sn', 'senegal flag'],
      u: '1f1f8-1f1f3',
      a: '2.0'
    },
    {
      n: ['flag-so', 'somalia flag'],
      u: '1f1f8-1f1f4',
      a: '2.0'
    },
    {
      n: ['flag-sr', 'suriname flag'],
      u: '1f1f8-1f1f7',
      a: '2.0'
    },
    {
      n: ['flag-ss', 'south sudan flag'],
      u: '1f1f8-1f1f8',
      a: '2.0'
    },
    {
      n: ['flag-st', 'são tomé & príncipe flag'],
      u: '1f1f8-1f1f9',
      a: '2.0'
    },
    {
      n: ['flag-sv', 'el salvador flag'],
      u: '1f1f8-1f1fb',
      a: '2.0'
    },
    {
      n: ['flag-sx', 'sint maarten flag'],
      u: '1f1f8-1f1fd',
      a: '2.0'
    },
    {
      n: ['flag-sy', 'syria flag'],
      u: '1f1f8-1f1fe',
      a: '2.0'
    },
    {
      n: ['flag-sz', 'eswatini flag'],
      u: '1f1f8-1f1ff',
      a: '2.0'
    },
    {
      n: ['flag-ta', 'tristan da cunha flag'],
      u: '1f1f9-1f1e6',
      a: '2.0'
    },
    {
      n: ['flag-tc', 'turks & caicos islands flag'],
      u: '1f1f9-1f1e8',
      a: '2.0'
    },
    {
      n: ['flag-td', 'chad flag'],
      u: '1f1f9-1f1e9',
      a: '2.0'
    },
    {
      n: ['flag-tf', 'french southern territories flag'],
      u: '1f1f9-1f1eb',
      a: '2.0'
    },
    {
      n: ['flag-tg', 'togo flag'],
      u: '1f1f9-1f1ec',
      a: '2.0'
    },
    {
      n: ['flag-th', 'thailand flag'],
      u: '1f1f9-1f1ed',
      a: '2.0'
    },
    {
      n: ['flag-tj', 'tajikistan flag'],
      u: '1f1f9-1f1ef',
      a: '2.0'
    },
    {
      n: ['flag-tk', 'tokelau flag'],
      u: '1f1f9-1f1f0',
      a: '2.0'
    },
    {
      n: ['flag-tl', 'timor-leste flag'],
      u: '1f1f9-1f1f1',
      a: '2.0'
    },
    {
      n: ['flag-tm', 'turkmenistan flag'],
      u: '1f1f9-1f1f2',
      a: '2.0'
    },
    {
      n: ['flag-tn', 'tunisia flag'],
      u: '1f1f9-1f1f3',
      a: '2.0'
    },
    {
      n: ['flag-to', 'tonga flag'],
      u: '1f1f9-1f1f4',
      a: '2.0'
    },
    {
      n: ['flag-tr', 'turkey flag'],
      u: '1f1f9-1f1f7',
      a: '2.0'
    },
    {
      n: ['flag-tt', 'trinidad & tobago flag'],
      u: '1f1f9-1f1f9',
      a: '2.0'
    },
    {
      n: ['flag-tv', 'tuvalu flag'],
      u: '1f1f9-1f1fb',
      a: '2.0'
    },
    {
      n: ['flag-tw', 'taiwan flag'],
      u: '1f1f9-1f1fc',
      a: '2.0'
    },
    {
      n: ['flag-tz', 'tanzania flag'],
      u: '1f1f9-1f1ff',
      a: '2.0'
    },
    {
      n: ['flag-ua', 'ukraine flag'],
      u: '1f1fa-1f1e6',
      a: '2.0'
    },
    {
      n: ['flag-ug', 'uganda flag'],
      u: '1f1fa-1f1ec',
      a: '2.0'
    },
    {
      n: ['flag-um', 'u.s. outlying islands flag'],
      u: '1f1fa-1f1f2',
      a: '2.0'
    },
    {
      n: ['flag-un', 'united nations flag'],
      u: '1f1fa-1f1f3',
      a: '4.0'
    },
    {
      n: ['us', 'flag-us', 'united states flag'],
      u: '1f1fa-1f1f8',
      a: '0.6'
    },
    {
      n: ['flag-uy', 'uruguay flag'],
      u: '1f1fa-1f1fe',
      a: '2.0'
    },
    {
      n: ['flag-uz', 'uzbekistan flag'],
      u: '1f1fa-1f1ff',
      a: '2.0'
    },
    {
      n: ['flag-va', 'vatican city flag'],
      u: '1f1fb-1f1e6',
      a: '2.0'
    },
    {
      n: ['flag-vc', 'st. vincent & grenadines flag'],
      u: '1f1fb-1f1e8',
      a: '2.0'
    },
    {
      n: ['flag-ve', 'venezuela flag'],
      u: '1f1fb-1f1ea',
      a: '2.0'
    },
    {
      n: ['flag-vg', 'british virgin islands flag'],
      u: '1f1fb-1f1ec',
      a: '2.0'
    },
    {
      n: ['flag-vi', 'u.s. virgin islands flag'],
      u: '1f1fb-1f1ee',
      a: '2.0'
    },
    {
      n: ['flag-vn', 'vietnam flag'],
      u: '1f1fb-1f1f3',
      a: '2.0'
    },
    {
      n: ['flag-vu', 'vanuatu flag'],
      u: '1f1fb-1f1fa',
      a: '2.0'
    },
    {
      n: ['flag-wf', 'wallis & futuna flag'],
      u: '1f1fc-1f1eb',
      a: '2.0'
    },
    {
      n: ['flag-ws', 'samoa flag'],
      u: '1f1fc-1f1f8',
      a: '2.0'
    },
    {
      n: ['flag-xk', 'kosovo flag'],
      u: '1f1fd-1f1f0',
      a: '2.0'
    },
    {
      n: ['flag-ye', 'yemen flag'],
      u: '1f1fe-1f1ea',
      a: '2.0'
    },
    {
      n: ['flag-yt', 'mayotte flag'],
      u: '1f1fe-1f1f9',
      a: '2.0'
    },
    {
      n: ['flag-za', 'south africa flag'],
      u: '1f1ff-1f1e6',
      a: '2.0'
    },
    {
      n: ['flag-zm', 'zambia flag'],
      u: '1f1ff-1f1f2',
      a: '2.0'
    },
    {
      n: ['flag-zw', 'zimbabwe flag'],
      u: '1f1ff-1f1fc',
      a: '2.0'
    },
    {
      n: ['england flag', 'flag-england'],
      u: '1f3f4-e0067-e0062-e0065-e006e-e0067-e007f',
      a: '5.0'
    },
    {
      n: ['scotland flag', 'flag-scotland'],
      u: '1f3f4-e0067-e0062-e0073-e0063-e0074-e007f',
      a: '5.0'
    },
    {
      n: ['wales flag', 'flag-wales'],
      u: '1f3f4-e0067-e0062-e0077-e006c-e0073-e007f',
      a: '5.0'
    }
  ]
}

export default emojiList

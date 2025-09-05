import { Character } from '@/types';

export const sampleCharacter: Character = {
  name: 'Bubble Fett',
  gender: '女性',
  age: 78,
  birthYear: 1356,
  faction: 'サングオファージ',
  ideology: '木陰',
  traits: [{name: '同性愛者', description: '恋愛対象が同性になります。'}],
  weaknesses: ['なし'],
  childhood: '店番の子供',
  adulthood: 'コーポレートマネージャ',
  skills: [
    { name: '射撃', value: 1, passion: 0 },
    { name: '格闘', value: 5, passion: 0 },
    { name: '建築', value: 3, passion: 0 },
    { name: '採掘', value: 5, passion: 1 },
    { name: '料理', value: 1, passion: 0 },
    { name: '栽培', value: 5, passion: 0 },
    { name: '動物', value: 11, passion: 2 },
    { name: '工芸', value: 0, passion: 0 },
    { name: '芸術', value: 0, passion: 0 },
    { name: '医術', value: 1, passion: 0 },
    { name: '社交', value: 18, passion: 2 },
    { name: '知力', value: 12, passion: 2 },
  ],
  talents: [
    { icon: '🐾', label: '調教の達人', description: '動物の調教成功率と速度が上がります。' },
    { icon: '🩸', label: '吸血の適性', description: 'サングオファージ派閥の特殊能力です。' },
    { icon: '🛡️', label: '護身術', description: '格闘スキルが5未満の場合、5として扱われます。' },
  ],
}

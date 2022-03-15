const MASKAPAI = [
   {
    maskapai_id: 'i1',
    maskapai_nama: 'Cat Air',
    maskapai_logo: 'Cat Air',
  },
   {
    maskapai_id: 'i2',
    maskapai_nama: 'Dog Air',
    maskapai_logo: 'Dog Air',
  },
   {
    maskapai_id: 'i3',
    maskapai_nama: 'Fish Air',
    maskapai_logo: 'Fish Air',
  },
   {
    maskapai_id: 'i4',
    maskapai_nama: 'Apple Air',
    maskapai_logo: 'Apple Air',
  },
   {
    maskapai_id: 'i5',
    maskapai_nama: 'Lemon Air',
    maskapai_logo: 'Lemon Air',
  },
   {
    maskapai_id: 'i6',
    maskapai_nama: 'Melon Air',
    maskapai_logo: 'Melon Air',
  },
   {
    maskapai_id: 'i7',
    maskapai_nama: 'Indo Air',
    maskapai_logo: 'Indo Air',
  },
   {
    maskapai_id: 'i8',
    maskapai_nama: 'Jakarta Air',
    maskapai_logo: 'Jakarta Air',
  },
   {
    maskapai_id: 'i9',
    maskapai_nama: 'Itera Air',
    maskapai_logo: 'Itera Air',
  },
   {
    maskapai_id: 'i10',
    maskapai_nama: 'If Air',
    maskapai_logo: 'If Air',
  },
];

const BANDARA = [
 {
    bandara_id: 'a1',
    bandara_nama: 'Itera Airport'
},
 {
    bandara_id: 'a2',
    bandara_nama: 'Darmajaya Airport'
},
 {
    bandara_id: 'a3',
    bandara_nama: 'UIN Airport'
},
 {
    bandara_id: 'a4',
    bandara_nama: 'Unila Airport'
},
 {
    bandara_id: 'a5',
    bandara_nama: 'Teknokrat Airport'
},
 {
    bandara_id: 'a6',
    bandara_nama: 'UI Airport'
},
 {
    bandara_id: 'a7',
    bandara_nama: 'US Airport'
},
 {
    bandara_id: 'a8',
    bandara_nama: 'ITB Airport'
},
 {
    bandara_id: 'a9',
    bandara_nama: 'IPB Airport'
},
 {
    bandara_id: 'a10',
    bandara_nama: 'UGM Airport'
},  
];

const JADWAL = [
    {
      jadwal_id: "1",
      bandara_id_keberangkatan: "a1",
      bandara_id_kedatangan: "a10",
      maskapai_id: "i1",
      tanggal: "2022-01-01",
    },
    {
      jadwal_id: "2",
      bandara_id_keberangkatan: "a2",
      bandara_id_kedatangan: "a9",
      maskapai_id: "i2",
      tanggal: "2022-01-02",
    },
    {
      jadwal_id: "3",
      bandara_id_keberangkatan: "a3",
      bandara_id_kedatangan: "a8",
      maskapai_id: "i3",
      tanggal: "2022-01-03",
    },
    {
      jadwal_id: "4",
      bandara_id_keberangkatan: "a4",
      bandara_id_kedatangan: "a7",
      maskapai_id: "i4",
      tanggal: "2022-01-04",
    },
    {
      jadwal_id: "5",
      bandara_id_keberangkatan: "a5",
      bandara_id_kedatangan: "a6",
      maskapai_id: "i5",
      tanggal: "2022-01-05",
    },
    {
      jadwal_id: "6",
      bandara_id_keberangkatan: "a6",
      bandara_id_kedatangan: "a5",
      maskapai_id: "i6",
      tanggal: "2022-01-06",
    },
    {
      jadwal_id: "7",
      bandara_id_keberangkatan: "a7",
      bandara_id_kedatangan: "a4",
      maskapai_id: "i7",
      tanggal: "2022-01-07",
    },
    {
      jadwal_id: "8",
      bandara_id_keberangkatan: "a8",
      bandara_id_kedatangan: "a13",
      maskapai_id: "i8",
      tanggal: "2022-01-08",
    },
    {
      jadwal_id: "9",
      bandara_id_keberangkatan: "a9",
      bandara_id_kedatangan: "a2",
      maskapai_id: "i9",
      tanggal: "2022-01-09",
    },
    {
      jadwal_id: "10",
      bandara_id_keberangkatan: "a10",
      bandara_id_kedatangan: "a1",
      maskapai_id: "i10",
      tanggal: "2022-01-10",
    },
];

export {MASKAPAI, BANDARA, JADWAL};
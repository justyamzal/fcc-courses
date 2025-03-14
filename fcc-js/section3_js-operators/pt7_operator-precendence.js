/----- OPERATOR PRECENDENCE -----//
/* Operator Precedence adalah aturan yang menentukan urutan eksekusi operator dalam sebuah ekspresi. Operator dengan precedence lebih tinggi akan dieksekusi terlebih dahulu sebelum yang lebih rendah.

Urutan Prioritas Operator (Dari Tertinggi ke Terendah)
Prioritas	Operator	Deskripsi
1 (Tertinggi)	()	Grouping (Kelompok Ekspresi)
2	. [] ()	Akses properti, array, dan pemanggilan fungsi
3	++ --	Increment / Decrement (Postfix)
4	! ~ + - typeof void delete	Unary Operators
5	**	Exponentiation (Pangkat)
6	* / %	Multiplication, Division, Modulus
7	+ -	Addition, Subtraction
8	<< >> >>>	Bitwise Shifts
9	< <= > >=	Comparison
10	== != === !==	Equality
11	&	Bitwise AND
12	^	Bitwise XOR
13	`	`
14	&&	Logical AND
15	`	
16	??	Nullish Coalescing
17	?:	Ternary Operator
18	= += -= *= /= %= **= <<= >>= &= ^= `	= ??=`
19 (Terendah)	,	Comma Operator


* Contoh Kasus :

1️⃣ Tanpa Grouping (())
javascript
----------------------------------------------------------------------
*/

// console.log(10 + 5 * 2); // Hasilnya 20, karena `*` lebih tinggi dari `+`

// 💡 5 * 2 dihitung dulu → 10 + 10 = 20

/*
2️⃣ Dengan Grouping (())
javascript
---------------------------------------------------------------------
*/

// console.log((10 + 5) * 2); // Hasilnya 30
// 💡 10 + 5 dihitung dulu → 15 * 2 = 30

/*
3️⃣ Perbedaan || vs ??
javascript
-----------------------------------------------------------------------
*/

// console.log("" || "default");   // "default" (karena "" falsy)
// console.log(null ?? "default"); // "default" (karena null nullish)

/*
💡 || memilih nilai pertama yang truthy, sedangkan ?? memilih nilai pertama yang tidak null/undefined.
Kesimpulan
✅ Operator dengan precedence lebih tinggi akan dieksekusi lebih dulu.
✅ Gunakan () jika ingin mengontrol urutan eksekusi.
✅ Pahami perbedaan precedence, terutama pada operator logika dan perbandingan.

*/

let n = 5 + (5 * 4);
// console.log(n)

let x = 5 + 5 * 4;
// console.log(x);

let y = (5 + 5) * 4;
// console.log(y);


var i, j, input;
var mp = new Array();
for (i = 0; i < 9; i += 1) 
	mp.push(new Array());
	
for (i = 0; i < 9; i += 1) {
	for (j = 0; j < 9; j += 1) {
		input = $('#c' + (i * 9 + j + 1));
		mp[i][j] = input.val() || 10;			
	}
}

var sudoku = new Sudoku(mp);
mp = sudoku.getResult();

for (i = 0; i < 9; i += 1) {
	for (j = 0; j < 9; j += 1) {
		$('#c' + (i * 9 + j + 1)).val("" + mp[i][j]);		
	}
}
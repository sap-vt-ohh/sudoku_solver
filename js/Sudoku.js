function Sudoku(matrix) {
	//copy the matrix data
	this._matrix = new Array();
	for (i = 0; i < 9; i += 1) 
		this._matrix.push(new Array());
	$.extend(true, this._matrix, matrix);
}

Sudoku.prototype.getResult = function() {
	this._search(this._matrix, 0, 0);
	return this._matrix;
};

Sudoku.prototype._clear = function(array, size, initVal) {
	for (var i = 0; i < size; i += 1) array[i] = initVal;
};

Sudoku.prototype._check = function(mp, x, y) {
	var i, j;
	var b = [];

	//check the row
	this._clear(b, 10, false);
	for (j = 0; j < 9; j += 1) {
		if (!(mp[x][j] >= 1 && mp[x][j] <= 9)) continue;
		if (b[mp[x][j]]) return false;
		b[mp[x][j]] = true;
	}
	//check the column
	this._clear(b, 10, false);
	for (i = 0; i < 9; i += 1) {
		if (!(mp[i][y] >= 1 && mp[i][y] <= 9)) continue;
		if (b[mp[i][y]]) return false;
		b[mp[i][y]] = true;
	}

	//check the block
	this._clear(b, 10, false);
	var bx = Math.floor(x / 3) * 3, by = Math.floor(y / 3) * 3;
	for (i = bx; i < bx + 3; i += 1) {
		for (j = by; j < by + 3; j += 1) {
			if (!(mp[i][j] >= 1 && mp[i][j] <= 9)) continue;
			if (b[mp[i][j]]) return false;
			b[mp[i][j]] = true;
		}
	}
	return true;
};

Sudoku.prototype._search = function (mp, x, y) {
	if (y >= 9) {
		x += 1;
		y = 0;
	}
	if (x >= 9) return true;

	if (mp[x][y] === 10) {
		for (var val = 1; val < 10; val += 1) {
			mp[x][y] = val;
			if (this._check(mp, x, y)) {
				if (this._search(mp, x, y + 1)) 
					return true;
			}
		}
		mp[x][y] = 10;
	} else {
		if (this._search(mp, x, y + 1)) 
			return true;
	}
};
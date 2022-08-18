# Etch-A-Sketch

After grid: CreateRows function creates div.row elements to append to container, which will add them on vertically.
CreateColumns function has two for-loops to append div.col element to the rows. Normally, we would expect each div.col to stack vertically inside each div.row because we use appendChild, but since we use display: INLINE this causes the div.col to stack horizontally(inline) inside each row, therefore giving us the desired grid structure. 

The rows variable in js lets us directly manipulate each row (through className identification) so we can appendChild div.col to it through rows[j].appendChild. For now, the columns variable is not used because we don't need to directly manipulate the columns.

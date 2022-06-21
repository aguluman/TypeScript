class DataStore<X,Y> {

    private _data: Array<X & Y> = new Array(10);
    
    AddOrUpdate(index: number, item: X & Y, material: Y) {
        if(index >=0 && index <10) {
            this._data[index] = item;
        }
    }
    GetData(index: number) {
        if(index >=0 && index < 10) {
            return this._data[index];
        } else {
            return
        }
    }
}
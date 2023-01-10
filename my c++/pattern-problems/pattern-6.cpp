#include <iostream>
using namespace std;

int main(){
    int n;
    cin >> n;
    int row = 1;
    while (row<=n)
    {
        int col = 1;
        while (col<=row)
    {
        cout << "*"
             << " ";
        col++;
    }
    cout << endl;
    row++;
    }
}

// expected output
// if n= 4
// * 
// * * 
// * * *
// * * * *
#include <iostream>
using namespace std;
int main(){
    int n;
    cin >> n;
    int row = 1;
    while (row<=n)
    {
        int col = 1;
        int count = row;
        while (col<=row)
        {
            cout << count<<" ";
            count++;
            col++;
        }
        cout << endl;
        row++;
    }
    
}

// expected output
// if n = 5
// 1
// 2 3
// 3 4 5
// 4 5 6 7
// 5 6 7 8 9
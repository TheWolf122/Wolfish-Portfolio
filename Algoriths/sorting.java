import java.util.Arrays;
// Base code for sorting algorithms in Java

// Bubble Sort 
// compexity?

    static void bubbleSort(int arr[], int n) {
        if (n == 1)
            return; // Base case
    
        for (int i=0; i<n-1; i++)
            if (arr[i] > arr[i+1]) {
                // swap arr[i], arr[i+1]
                int temp = arr[i]; // grab
                arr[i] = arr[i+1]; // swap
                arr[i+1] = temp;
            }
    
        // Largest element is fixed,
        // recur for remaining array
        bubbleSort(arr, n-1);
    }

// Insertion Sort
// n^2 complexity

    public static <AnyType extends Comparable<? super AnyType>>
    void insertionSort( AnyType [ ] a ) {
        int j;

        for( int p = 1; p < a.length; p++ ) {
            AnyType tmp = a[ p ]; //grab
            for( j = p; j >0&& tmp.compareTo(a[j-1]) < 0; j-- ) // conscientious
                a[ j ] = a[ j - 1 ]; //slide
                a[ j ] = tmp; //drop
        }
    }

// Merge Sort
// n log n complexity
//    divide and conquer.
//    The mergeSort is very simple, but Merge is a bit more complex.
//    Its a great **EXTERNAL SORTING** algorithm for very large data sets. It would still be complexity n log n, just with a huge constant.

    void mergeSort( E [ ] a, E [ ] tmpArray, int beg, int end ) {
        if( beg <end) {
            int center = ( beg+end) / 2; //split array into two
            mergeSort( a, tmpArray, beg, center ); //sort left
            mergeSort( a, tmpArray, center + 1, end); //sort right
            merge( a, tmpArray,beg, center + 1, end ); //merge
        }
    }

    void merge( E [ ] a, E [ ] tmpArray, int leftPos, int rightPos, int endSlice ) {
        int leftEnd = rightPos - 1;
        int tmpPos = leftPos;
        int numElements = endSlice - leftPos + 1;
        
        while( leftPos <= leftEnd && rightPos <= endSlice )
            if( a[ leftPos ].compareTo( a[ rightPos ] ) <= 0 )
                tmpArray[ tmpPos++ ] = a[ leftPos++ ];
            else
                tmpArray[ tmpPos++ ] = a[ rightPos++ ];
        
        while( leftPos <= leftEnd ) // Copy rest of first half if needed
            tmpArray[ tmpPos++ ] = a[ leftPos++ ];

        while( rightPos <= endSlice ) // Copy rest of right half if needed
            tmpArray[ tmpPos++ ] = a[ rightPos++ ];

        for( int i = 0; i < numElements; i++, endSlice-- ) // Copy tmpArray back.
            a[ endSlice ] = tmpArray[ endSlice ];
    }

// Quick Sort
// n log n complexity as an average, but n^2 in the worst case.
// Also uses divide and conquer (like merge sort), but does it in place.
//     It is a bit more complex than merge sort, but is possibly faster in practice.
//     It is also a great **EXTERNAL SORTING** algorithm for very large data sets.

    public static <AnyType extends Comparable<? super AnyType>>
    void quicksort( AnyType [ ] a ) {
        quicksort( a, 0, a.length - 1 );
    }

    private static final int CUTOFF = 10;

    public static <AnyType extends Comparable<? super AnyType>>
    void quicksort( AnyType [ ] a, int low, int high ) {
        if ( low + CUTOFF > high ) { //insertion sort on small parts dependsing on the pivot.
            insertionSort(a, low, high); 
        }
        else {
            int middle = ( low + high ) / 2;
            if( a[ middle ].compareTo( a[ low ] ) < 0 )
                swapReferences( a, low, middle );
            if( a[ high ].compareTo( a[ low ] ) < 0 )
                swapReferences( a, low, high );
            if( a[ high ].compareTo( a[ middle ] ) < 0 )
                swapReferences( a, middle, high );

            // Place pivot at position high - 1
            swapReferences( a, middle, high - 1 );
            AnyType pivot = a[ high - 1 ];

            // Begin partitioning
            int i, j;
            for( i = low, j = high - 1; ; ) {
                while( a[ ++i ].compareTo( pivot ) < 0 )
                    ;
                while( pivot.compareTo( a[ --j ] ) < 0 )
                    ;
                if( i >= j )
                    break;
                swapReferences( a, i, j );
            }

            // Restore pivot
            swapReferences( a, i, high - 1 );

            quicksort( a, low, i - 1 ); // Sort small elements
            quicksort( a, i + 1, high ); // Sort large elements
        }
    }

    public static <AnyType extends Comparable<? super AnyType>>
    void swapReferences( AnyType [ ] a, int index1, int index2 ) {
        AnyType tmp = a[ index1 ];
        a[ index1 ] = a[ index2 ];
        a[ index2 ] = tmp;
    }


// Selection Sort
// n^2 complexity in ALL cases 
//      it ALWAYS checks to swap. NOT adaptive.

    public static <AnyType extends Comparable<? super AnyType>>
    void SelectionSort(T a[], int n) {   // Sort the n elements a[0:n-1]
        for (int size = n-1; size > 0; size--){ 
            int j = findMax(a, 0,size); // Find the index j of the largest element
            swap(a[j], a[size]); // Swap the largest element with the element in a[size]
        }
    }

// Shell Sort
// n^2 complexity

    public static <E extends Comparable<? super E>>
    void shellsort( E [ ] a ) {
        int j;
        for( int gap = a.length / 2; gap > 0; gap /= 2 ) //Repeat sort at various gaps
            for( int i = gap; i < a.length; i++ ) { //For a fixed gap, sort each item{
                E tmp = a[ i ];
                for( j = i; j >= gap && tmp.compareTo( a[ j - gap ] ) < 0; j -= gap )
                    a[ j ] = a[ j - gap ];
                a[ j ] = tmp;
            }
    }


    
// Questions Data
const questionsData = {
    "mcqQuestions": [
        {
            "question": "Which of the following is typically the first step in solving computational problems?",
            "options": [
                "Designing an Algorithm",
                "Problem definition",
                "Program testing",
                "Documentation"
            ],
            "answer": "Problem definition",
            "difficulty": "easy",
            "category": "complexity"
        },
        {
            "question": "Which of these is NOT a characteristic of a well-defined algorithm?",
            "options": [
                "It must have a unique name",
                "It should define a set of inputs and outputs",
                "It should ideally run for infinity to explore all solutions",
                "Its operations must be well-ordered and unambiguous"
            ],
            "answer": "It should ideally run for infinity to explore all solutions",
            "difficulty": "medium",
            "category": "complexity"
        },
        {
            "question": "What is the worst-case time complexity of Insertion Sort for an array of n elements?",
            "options": [
                "O(n)",
                "O(nlogn)",
                "O(n²)",
                "O(logn)"
            ],
            "answer": "O(n²)",
            "difficulty": "medium",
            "category": "sorting"
        },
        {
            "question": "The time complexity for Bubble Sort in all cases (best, worst, average) is:",
            "options": [
                "O(n)",
                "O(nlogn)",
                "O(n²)",
                "O(1)"
            ],
            "answer": "O(n²)",
            "difficulty": "medium",
            "category": "sorting"
        },
        {
            "question": "The Divide-and-Conquer strategy involves which of the following phases?",
            "options": [
                "Divide, Iterate, Combine",
                "Initialize, Conquer, Validate",
                "Divide, Conquer, Combine",
                "Structure, Operate, Terminate"
            ],
            "answer": "Divide, Conquer, Combine",
            "difficulty": "medium",
            "category": "complexity"
        },
        {
            "question": "The recurrence relation T(n)=2T(n/2)+O(n) is characteristic of which algorithm?",
            "options": [
                "Binary Search",
                "Merge Sort",
                "Insertion Sort",
                "Linear Search"
            ],
            "answer": "Merge Sort",
            "difficulty": "hard",
            "category": "sorting"
        },
        {
            "question": "Using the Master Method for T(n)=9T(n/3)+n, what is n log_b a?",
            "options": [
                "n log_3 9 = n²",
                "n log_9 3 = n^(1/2)",
                "n",
                "n³"
            ],
            "answer": "n log_3 9 = n²",
            "difficulty": "hard",
            "category": "complexity"
        },
        {
            "question": "For the recurrence T(n)=T(2n/3)+1, which case of the Master Method applies and what is the solution?",
            "options": [
                "Case 1, Θ(n)",
                "Case 2, Θ(lgn)",
                "Case 3, Θ(1)",
                "Case 2, Θ(nlgn)"
            ],
            "answer": "Case 2, Θ(lgn)",
            "difficulty": "hard",
            "category": "complexity"
        },
        {
            "question": "The Recursion Tree Method is primarily used for:",
            "options": [
                "Designing recursive algorithms",
                "Visualizing the step-by-step execution of a recursive function",
                "Analyzing the time complexity of recurrence relations",
                "Converting recursive algorithms to iterative ones"
            ],
            "answer": "Analyzing the time complexity of recurrence relations",
            "difficulty": "medium",
            "category": "complexity"
        },
        {
            "question": "What is the average-case time complexity of Quick Sort?",
            "options": [
                "Θ(n²)",
                "Θ(n)",
                "Θ(nlgn)",
                "Θ(lgn)"
            ],
            "answer": "Θ(nlgn)",
            "difficulty": "medium",
            "category": "sorting"
        },
        {
            "question": "In the provided PARTITION(A, p, r) algorithm for Quick Sort, which element is selected as the pivot?",
            "options": [
                "The first element A[p]",
                "The last element A[r]",
                "The middle element A[⌊(p+r)/2⌋]",
                "A random element"
            ],
            "answer": "The last element A[r]",
            "difficulty": "medium",
            "category": "sorting"
        },
        {
            "question": "What is the time complexity of the MAX-HEAPIFY(A, i, n) operation on a heap of size n?",
            "options": [
                "O(1)",
                "O(lgn)",
                "O(n)",
                "O(nlgn)"
            ],
            "answer": "O(lgn)",
            "difficulty": "medium",
            "category": "datastructures"
        },
        {
            "question": "Which data structure is typically used to implement Breadth-First Search (BFS)?",
            "options": [
                "Stack",
                "Queue",
                "Priority Queue",
                "Array"
            ],
            "answer": "Queue",
            "difficulty": "medium",
            "category": "searching"
        },
        {
            "question": "The total running time of the BFS procedure on a graph G=(V,E) represented by adjacency lists is:",
            "options": [
                "O(V)",
                "O(E)",
                "O(V⋅E)",
                "O(V+E)"
            ],
            "answer": "O(V+E)",
            "difficulty": "hard",
            "category": "searching"
        },
        {
            "question": "Informed search algorithms are also known as:",
            "options": [
                "Blind searches",
                "Brute-force searches",
                "Heuristic searches",
                "Exhaustive searches"
            ],
            "answer": "Heuristic searches",
            "difficulty": "medium",
            "category": "searching"
        },
        {
            "question": "The process of analyzing an algorithm's problem-solving capability in terms of time and size is known as:",
            "options": [
                "Algorithm Design",
                "Algorithm Implementation",
                "Analysis of Algorithm",
                "Algorithm Documentation"
            ],
            "answer": "Analysis of Algorithm",
            "difficulty": "easy",
            "category": "complexity"
        },
        {
            "question": "If f(n)=Θ(g(n)), it implies that for large n, f(n) is:",
            "options": [
                "Bounded above by c₂g(n) only",
                "Bounded below by c₁g(n) only",
                "Bounded both above by c₂g(n) and below by c₁g(n) for positive constants c₁,c₂",
                "Always equal to g(n)"
            ],
            "answer": "Bounded both above by c₂g(n) and below by c₁g(n) for positive constants c₁,c₂",
            "difficulty": "hard",
            "category": "complexity"
        },
        {
            "question": "What is the Big-O running time for the following code snippet: sum = 0; for(i=0; i < sqrt(n)/2; i++) sum++;?",
            "options": [
                "O(n)",
                "O(n²)",
                "O(√n)",
                "O(logn)"
            ],
            "answer": "O(√n)",
            "difficulty": "medium",
            "category": "complexity"
        },
        {
            "question": "In Insertion Sort, what is the best-case time complexity if the input array is already sorted?",
            "options": [
                "O(n²)",
                "O(nlogn)",
                "O(n)",
                "O(1)"
            ],
            "answer": "O(n)",
            "difficulty": "medium",
            "category": "sorting"
        },
        {
            "question": "Selection Sort's time complexity in all cases (best, worst, average) is:",
            "options": [
                "O(n)",
                "O(nlogn)",
                "O(n²)",
                "O(n³)"
            ],
            "answer": "O(n²)",
            "difficulty": "medium",
            "category": "sorting"
        },
        {
            "question": "The 'Combine' step in the Merge Sort algorithm involves:",
            "options": [
                "Dividing the sequence into two subsequences",
                "Sorting the two subsequences recursively",
                "Merging the two sorted subsequences to produce the sorted answer",
                "Selecting a pivot element"
            ],
            "answer": "Merging the two sorted subsequences to produce the sorted answer",
            "difficulty": "medium",
            "category": "sorting"
        },
        {
            "question": "What is the first step in solving a recurrence using the Substitution Method?",
            "options": [
                "Verify the solution by using an inductive argument",
                "Guess the form of the solution",
                "Solve for constants",
                "Draw a recursion tree"
            ],
            "answer": "Guess the form of the solution",
            "difficulty": "hard",
            "category": "complexity"
        },
        {
            "question": "For the Master Theorem T(n)=aT(n/b)+f(n), if nlog_b(a) > f(n), what is the solution?",
            "options": [
                "T(n)=Θ(nlog_b(a)lgn)",
                "T(n)=Θ(f(n))",
                "T(n)=Θ(nlog_b(a))",
                "T(n)=Θ(f(n)lgn)"
            ],
            "answer": "T(n)=Θ(nlog_b(a))",
            "difficulty": "hard",
            "category": "complexity"
        },
        {
            "question": "Using the Master Method, what is the solution for T(n)=2T(n/2)+O(n)?",
            "options": [
                "Θ(n)",
                "Θ(nlgn)",
                "Θ(n²)",
                "Θ(lgn)"
            ],
            "answer": "Θ(nlgn)",
            "difficulty": "hard",
            "category": "complexity"
        },
        {
            "question": "In a recursion tree for T(n)=aT(n/b)+f(n), what is the typical height of the tree when subproblems reach size 1?",
            "options": [
                "log_a(n)",
                "n/b",
                "log_b(n)",
                "a·b"
            ],
            "answer": "log_b(n)",
            "difficulty": "hard",
            "category": "complexity"
        },
        {
            "question": "Quick Sort's worst-case time complexity of O(n²) occurs when:",
            "options": [
                "The pivot chosen is always the median element",
                "The partition process always picks the greatest or smallest element as pivot",
                "The array is completely random",
                "The array has many duplicate elements"
            ],
            "answer": "The partition process always picks the greatest or smallest element as pivot",
            "difficulty": "medium",
            "category": "sorting"
        },
        {
            "question": "The PARTITION algorithm in Quick Sort aims to place the pivot element such that:",
            "options": [
                "All elements to its left are greater, and all to its right are smaller",
                "All elements to its left are smaller or equal, and all to its right are greater",
                "It is the first element of the array",
                "It is the last element of the array"
            ],
            "answer": "All elements to its left are smaller or equal, and all to its right are greater",
            "difficulty": "medium",
            "category": "sorting"
        },
        {
            "question": "In a Max-Heap, the value of any node is:",
            "options": [
                "Less than or equal to the value of its children",
                "Greater than or equal to the value of its children",
                "Equal to the average of its children's values",
                "Randomly related to its children's values"
            ],
            "answer": "Greater than or equal to the value of its children",
            "difficulty": "medium",
            "category": "datastructures"
        },
        {
            "question": "The BUILD-MAX-HEAP algorithm converts an unordered array into a max-heap. What is its typical time complexity?",
            "options": [
                "O(n)",
                "O(nlgn)",
                "O(lgn)",
                "O(n²)"
            ],
            "answer": "O(n)",
            "difficulty": "medium",
            "category": "datastructures"
        },
        {
            "question": "In graph theory, an Adjacency Matrix is generally preferred for:",
            "options": [
                "Sparse graphs",
                "Dense graphs",
                "Graphs with negative edge weights",
                "Acyclic graphs only"
            ],
            "answer": "Dense graphs",
            "difficulty": "medium",
            "category": "datastructures"
        },
        {
            "question": "In the Depth-First Search (DFS) algorithm DFS-VISIT(G,u), when is the finish time u.f recorded for vertex u?",
            "options": [
                "When u is first discovered (becomes GRAY)",
                "After all vertices adjacent to u have been visited",
                "After exploring all of u's adjacency list and u becomes BLACK",
                "Just before u becomes GRAY"
            ],
            "answer": "After exploring all of u's adjacency list and u becomes BLACK",
            "difficulty": "hard",
            "category": "searching"
        },
        {
            "question": "What type of edge in a DFS traversal connects a vertex u to a descendant v (that is not a tree edge)?",
            "options": [
                "Back edge (B)",
                "Forward edge (F)",
                "Cross edge (C)",
                "Sibling edge"
            ],
            "answer": "Forward edge (F)",
            "difficulty": "medium",
            "category": "searching"
        },
        {
            "question": "Uninformed search strategies are also called blind searches because they:",
            "options": [
                "Always find the goal state quickly",
                "Use heuristics to guide the search",
                "Have no information about the problem other than the definition of states and operators",
                "Are only applicable to puzzles"
            ],
            "answer": "Have no information about the problem other than the definition of states and operators",
            "difficulty": "medium",
            "category": "searching"
        },
        {
            "question": "In the 8-Puzzle problem, if tile '7' is in the top-left (goal: middle-right) and the grid is 3x3, what's its contribution to h2 (Manhattan distance)?",
            "options": [
                "1",
                "2",
                "3",
                "4"
            ],
            "answer": "3",
            "difficulty": "hard",
            "category": "searching"
        },
        {
            "question": "Greedy Best-First Search expands the node that appears to be closest to the goal, meaning it selects the node n with the minimum:",
            "options": [
                "g(n)",
                "h(n)",
                "g(n)+h(n)",
                "g(n)−h(n)"
            ],
            "answer": "h(n)",
            "difficulty": "medium",
            "category": "searching"
        },
        {
            "question": "Is Greedy Best-First Search always optimal and complete?",
            "options": [
                "Yes, it is both optimal and complete",
                "It is optimal but not always complete",
                "It is complete (if loop avoidance) but not optimal",
                "It is neither guaranteed to be optimal nor complete"
            ],
            "answer": "It is neither guaranteed to be optimal nor complete",
            "difficulty": "medium",
            "category": "searching"
        },
        {
            "question": "A search evaluates nodes by combining g(n) and h(n). It is optimal if h(n) is:",
            "options": [
                "Always 0",
                "Admissible (never overestimates the cost to goal) and consistent for graph search",
                "Greater than the actual cost",
                "A constant value for all nodes"
            ],
            "answer": "Admissible (never overestimates the cost to goal) and consistent for graph search",
            "difficulty": "hard",
            "category": "searching"
        },
        {
            "question": "A rooted tree is a tree where one vertex is designated as the root, and every edge is directed:",
            "options": [
                "Towards the root",
                "Away from the root",
                "Alternating towards and away from the root",
                "Parallel to the root"
            ],
            "answer": "Away from the root",
            "difficulty": "medium",
            "category": "datastructures"
        },
        {
            "question": "In a rooted tree, if vertex B is a parent to vertex F, then F is called a(n) ________ of B.",
            "options": [
                "Ancestor",
                "Sibling",
                "Offspring (or child)",
                "Root"
            ],
            "answer": "Offspring (or child)",
            "difficulty": "easy",
            "category": "datastructures"
        },
        {
            "question": "A walk with no repeated edges is defined as a:",
            "options": [
                "Path",
                "Trail",
                "Circuit",
                "Cycle"
            ],
            "answer": "Trail",
            "difficulty": "medium",
            "category": "datastructures"
        },
        {
            "question": "In Huffman coding, to encode symbols A:0.08, B:0.10, C:0.12, D:0.15, E:0.20, F:0.35, which two symbols/nodes would be combined first?",
            "options": [
                "E and F",
                "A and B",
                "D and E",
                "C and D"
            ],
            "answer": "A and B",
            "difficulty": "hard",
            "category": "datastructures"
        },
        {
            "question": "Prim's algorithm for finding an MST starts with a single vertex. In each subsequent step, it adds to the current tree:",
            "options": [
                "The edge of least weight anywhere in the graph that doesn't form a cycle",
                "A nearest neighbor (least weight edge) connecting a vertex in the tree to a vertex not yet in the tree",
                "All edges connected to the most recently added vertex",
                "The vertex that is furthest from the current tree"
            ],
            "answer": "A nearest neighbor (least weight edge) connecting a vertex in the tree to a vertex not yet in the tree",
            "difficulty": "medium",
            "category": "datastructures"
        },
        {
            "question": "The worst-case time complexity for Linear Search on an array of size n is:",
            "options": [
                "O(1)",
                "O(logn)",
                "O(n)",
                "O(n²)"
            ],
            "answer": "O(n)",
            "difficulty": "easy",
            "category": "searching"
        },
        {
            "question": "Which of the following notations provides a tight bound (both upper and lower) on the growth rate of a function?",
            "options": [
                "Big-O",
                "Big-Ω (Omega)",
                "Big-Θ (Theta)",
                "Little-o"
            ],
            "answer": "Big-Θ (Theta)",
            "difficulty": "medium",
            "category": "complexity"
        },
        {
            "question": "In the detailed analysis of Insertion Sort, tj represents the number of times the while loop test is executed for that value of j. In the worst case, tj is equal to:",
            "options": [
                "1",
                "j",
                "n-j",
                "j/2"
            ],
            "answer": "j",
            "difficulty": "hard",
            "category": "sorting"
        },
        {
            "question": "The cn term in Merge Sort's recurrence T(n)=2T(n/2)+cn represents:",
            "options": [
                "The time to divide the problem",
                "The time to conquer (solve recursively)",
                "The time to combine (merge) the solutions",
                "The time for initial setup"
            ],
            "answer": "The time to combine (merge) the solutions",
            "difficulty": "medium",
            "category": "sorting"
        },
        {
            "question": "In a recursion tree for T(n)=3T(n/4)+Θ(n²), if the cost at the root is cn², the cost at depth 1 will be:",
            "options": [
                "c(n/4)²",
                "3c(n/4)²",
                "3cn²",
                "c(3n/4)²"
            ],
            "answer": "3c(n/4)²",
            "difficulty": "hard",
            "category": "complexity"
        },
        {
            "question": "What does pseudocode provide in the context of algorithms?",
            "options": [
                "A machine-executable version of the algorithm",
                "A high-level description of an algorithm without needing to know specific programming language syntax",
                "A diagrammatic representation of the algorithm's flow",
                "A mathematical proof of the algorithm's correctness"
            ],
            "answer": "A high-level description of an algorithm without needing to know specific programming language syntax",
            "difficulty": "easy",
            "category": "complexity"
        },
        {
            "question": "In the linear search algorithm provided, what is the purpose of 'Step 1: Set i to 1'?",
            "options": [
                "To count the number of elements in the array",
                "To initialize the loop counter or array index",
                "To store the value to be searched",
                "To mark the end of the array"
            ],
            "answer": "To initialize the loop counter or array index",
            "difficulty": "easy",
            "category": "searching"
        },
        {
            "question": "'Analysis of algorithm is the process of analyzing the problem-solving capability of the algorithm in terms of the time and size.' This statement primarily focuses on:",
            "options": [
                "The ease of coding the algorithm",
                "The algorithm's performance and resource usage",
                "The number of developers required to implement the algorithm",
                "The algorithm's applicability to different problem domains"
            ],
            "answer": "The algorithm's performance and resource usage",
            "difficulty": "easy",
            "category": "complexity"
        },
        {
            "question": "If n³ ∈ O(2ⁿ), it means that for n ≥ n₀ = 10:",
            "options": [
                "n³ grows faster than 2ⁿ",
                "2ⁿ serves as an upper bound for n³ (multiplied by a constant)",
                "n³ is always equal to 2ⁿ",
                "2ⁿ serves as a lower bound for n³"
            ],
            "answer": "2ⁿ serves as an upper bound for n³ (multiplied by a constant)",
            "difficulty": "hard",
            "category": "complexity"
        },
        {
            "question": "Consider the code: for(j=1; j < i*i; j++) sum++;. If this loop is inside another loop where i iterates up to n, what would be the dominant complexity contribution of this inner loop relative to i?",
            "options": [
                "O(i)",
                "O(i²)",
                "O(logi)",
                "O(1)"
            ],
            "answer": "O(i²)",
            "difficulty": "hard",
            "category": "complexity"
        },
        {
            "question": "In the analysis of Insertion Sort, the term c₅∑(j=2 to n)tⱼ represents the cost associated with:",
            "options": [
                "Initializing the loop counter j",
                "The while loop condition being tested",
                "Assigning A[j] to key",
                "The final placement A[i+1]←key"
            ],
            "answer": "The while loop condition being tested",
            "difficulty": "hard",
            "category": "sorting"
        },
        {
            "question": "For Insertion Sort, the best-case run time T(n)=O(n) occurs when all tⱼ=1. This happens when:",
            "options": [
                "The array is in reverse sorted order",
                "The array is already sorted",
                "The array contains random elements",
                "The array contains many duplicate values"
            ],
            "answer": "The array is already sorted",
            "difficulty": "medium",
            "category": "sorting"
        },
        {
            "question": "The Bubble Sort algorithm performs exchanges using the line: exchange A[j] ↔ A[j-1]. This occurs if:",
            "options": [
                "A[j] > A[j−1]",
                "A[j] < A[j−1]",
                "A[j] = A[j−1]",
                "A[j] is the pivot element"
            ],
            "answer": "A[j] < A[j−1]",
            "difficulty": "medium",
            "category": "sorting"
        },
        {
            "question": "In Selection Sort, the statement smallest = j is executed at the beginning of each outer loop pass. Its purpose is to:",
            "options": [
                "Store the smallest value found so far",
                "Initialize the index of the smallest element for the current pass",
                "Count the number of passes",
                "Finalize the sort for element A[j]"
            ],
            "answer": "Initialize the index of the smallest element for the current pass",
            "difficulty": "medium",
            "category": "sorting"
        },
        {
            "question": "The 'Divide' step in the Divide-and-Conquer paradigm for Merge Sort involves dividing the n-element sequence into:",
            "options": [
                "n subsequences of 1 element each",
                "Two subsequences of n/2 elements each",
                "logn subsequences",
                "A sorted and an unsorted subsequence"
            ],
            "answer": "Two subsequences of n/2 elements each",
            "difficulty": "medium",
            "category": "sorting"
        },
        {
            "question": "The MERGESORT(A, p, r) algorithm has a base case for recursion. This occurs when:",
            "options": [
                "p≥r (implicitly, as the condition is if (p<r))",
                "q=⌊(p+r)/2⌋",
                "The array A is fully sorted",
                "n₁=n₂"
            ],
            "answer": "p≥r (implicitly, as the condition is if (p<r))",
            "difficulty": "medium",
            "category": "sorting"
        },
        {
            "question": "A recurrence is an equation defining a function f(n) recursively in terms of:",
            "options": [
                "Iterative loops",
                "Smaller values of n",
                "Constant values only",
                "External library functions"
            ],
            "answer": "Smaller values of n",
            "difficulty": "medium",
            "category": "complexity"
        },
        {
            "question": "The Master Method provides solutions for recurrences of the form T(n)=aT(n/b)+f(n). The condition a≥1 and b>1 must hold. If b≤1, the method:",
            "options": [
                "Still applies with minor modifications",
                "Implies subproblems are not getting smaller, so it's not suitable",
                "Requires f(n) to be a constant",
                "Can only be used for Case 1"
            ],
            "answer": "Implies subproblems are not getting smaller, so it's not suitable",
            "difficulty": "hard",
            "category": "complexity"
        },
        {
            "question": "For T(n)=8T(n/2)+n³, we have a=8,b=2,f(n)=n³. nlog_b(a)=nlog_2(8)=n³. Since f(n)=Θ(nlog_b(a)), which case applies?",
            "options": [
                "Case 1",
                "Case 2",
                "Case 3",
                "The method is inconclusive"
            ],
            "answer": "Case 2",
            "difficulty": "hard",
            "category": "complexity"
        },
        {
            "question": "In the Recursion Tree method for T(n)=aT(n/b)+f(n), the number of leaf nodes is typically:",
            "options": [
                "aʰᵉⁱᵍʰᵗ (where height ≈log_b(n))",
                "bʰᵉⁱᵍʰᵗ",
                "f(n)·height",
                "n/b"
            ],
            "answer": "aʰᵉⁱᵍʰᵗ (where height ≈log_b(n))",
            "difficulty": "hard",
            "category": "complexity"
        },
        {
            "question": "The solution T(n)=O(n²) for T(n)=2T(n/2)+n² is derived because the sum ∑(i=0 to lgn)(1/2)ⁱ converges to 2. Thus, the total cost is dominated by:",
            "options": [
                "The cost at the leaves",
                "The cost at the root node (cn²)",
                "The number of levels (lgn)",
                "The sum of n²/2ⁱ across all levels"
            ],
            "answer": "The cost at the root node (cn²)",
            "difficulty": "hard",
            "category": "complexity"
        },
        {
            "question": "QuickSort is described as being based on 'partitioning of array of data into smaller arrays using pivot.' The recursive calls are then made on:",
            "options": [
                "The entire array again with a new pivot",
                "The two resulting subarrays (one to the left of pivot, one to the right)",
                "Only the subarray containing elements smaller than the pivot",
                "The subarray containing elements larger than the pivot and the pivot itself"
            ],
            "answer": "The two resulting subarrays (one to the left of pivot, one to the right)",
            "difficulty": "medium",
            "category": "sorting"
        },
        {
            "question": "The PARTITION(A,p,r) algorithm returns i+1. This value represents:",
            "options": [
                "The final index of the pivot element after partitioning",
                "The number of elements smaller than the pivot",
                "The number of swaps performed",
                "The middle index of the array A[p..r]"
            ],
            "answer": "The final index of the pivot element after partitioning",
            "difficulty": "medium",
            "category": "sorting"
        },
        {
            "question": "The 'level of a node' in a tree is defined as the:",
            "options": [
                "Number of children of that node",
                "Length of a path from the root to the node",
                "Number of edges on the longest path from the node to a leaf",
                "The depth of its deepest child"
            ],
            "answer": "Length of a path from the root to the node",
            "difficulty": "medium",
            "category": "datastructures"
        },
        {
            "question": "A heap is described as a 'nearly complete binary tree.' The structural property also specifies that all levels are full, except possibly the last one, which is:",
            "options": [
                "Filled from right to left",
                "Filled from left to right",
                "Filled randomly",
                "Required to be exactly half-full"
            ],
            "answer": "Filled from left to right",
            "difficulty": "medium",
            "category": "datastructures"
        },
        {
            "question": "In a Min-heap, the root element is always:",
            "options": [
                "The maximum element of the heap",
                "The minimum element of the heap",
                "The median element of the heap",
                "An arbitrary element depending on insertion order"
            ],
            "answer": "The minimum element of the heap",
            "difficulty": "easy",
            "category": "datastructures"
        },
        {
            "question": "An Adjacency List representation of a graph is typically preferred for sparse graphs because its space complexity is closer to:",
            "options": [
                "O(|V|²)",
                "O(|V|+|E|)",
                "O(|E|²)",
                "O(|V|log|E|)"
            ],
            "answer": "O(|V|+|E|)",
            "difficulty": "medium",
            "category": "datastructures"
        },
        {
            "question": "In BFS, when a WHITE vertex v is discovered from u, v.color is set to GRAY, and v.π (parent) is set to:",
            "options": [
                "s (the source)",
                "u (the discovering vertex)",
                "NIL",
                "v itself"
            ],
            "answer": "u (the discovering vertex)",
            "difficulty": "medium",
            "category": "searching"
        },
        {
            "question": "The time complexity of DFS is O(V+E). The O(E) part of this complexity arises from:",
            "options": [
                "The initial loop through all vertices u∈G.V in the main DFS procedure",
                "The sum of the work done in exploring the adjacency list of each vertex (i.e., ∑|Adj[v]| for v∈V)",
                "Setting u.color = WHITE for all vertices",
                "Incrementing the time variable"
            ],
            "answer": "The sum of the work done in exploring the adjacency list of each vertex (i.e., ∑|Adj[v]| for v∈V)",
            "difficulty": "hard",
            "category": "searching"
        },
        {
            "question": "Which type of search makes use of problem-specific information (heuristics) to guide the search process?",
            "options": [
                "Uninformed Search",
                "Blind Search",
                "Informed Search (Heuristic Search)",
                "Brute Force Search"
            ],
            "answer": "Informed Search (Heuristic Search)",
            "difficulty": "medium",
            "category": "searching"
        },
        {
            "question": "Apply Quick sort on a given sequence [7, 11, 14, 6, 9, 4, 3, 12]. What is the sequence after the first phase, pivot is 7?",
            "options": [
                "4, 3, 7, 6, 11, 9, 14, 12",
                "3, 4, 6, 7, 9, 14, 11, 12",
                "7, 6, 14, 11, 9, 4, 3, 12",
                "7, 6, 4, 3, 9, 14, 11, 12"
            ],
            "answer": "4, 3, 7, 6, 11, 9, 14, 12",
            "difficulty": "medium",
            "category": "sorting"
        },
        {
            "question": "Which one of the following array elements represents a binary min-heap?",
            "options": [
                "12, 10, 8, 25, 14, 17",
                "8, 10, 12, 25, 14, 17",
                "25, 17, 14, 12, 10, 8",
                "14, 17, 25, 10, 12, 8"
            ],
            "answer": "8, 10, 12, 25, 14, 17",
            "difficulty": "medium",
            "category": "datastructures"
        },
        {
            "question": "What is the time complexity of the Quick sort Algorithm if it is applied on this array [12, 16, 23, 31, 55]?",
            "options": [
                "O(n log n)",
                "O(n)",
                "O(n³)",
                "O(n²)"
            ],
            "answer": "O(n²)",
            "difficulty": "medium",
            "category": "sorting"
        },
        {
            "question": "What is the parent node for i=7 in this array [3, 5, 10, 20, 11, 13, 12, 31]?",
            "options": [
                "10",
                "20",
                "5",
                "3"
            ],
            "answer": "5",
            "difficulty": "medium",
            "category": "datastructures"
        },
        {
            "question": "Given an array of elements [5, 7, 9, 1, 3, 10, 8, 4], which of the following are the correct sequences of elements after inserting all the elements in a min-heap?",
            "options": [
                "1, 3, 4, 5, 7, 8, 9, 10",
                "1, 4, 3, 9, 8, 5, 7, 10",
                "1, 3, 4, 5, 8, 7, 9, 10",
                "1, 3, 7, 4, 8, 5, 9, 10"
            ],
            "answer": "1, 3, 4, 5, 7, 8, 9, 10",
            "difficulty": "hard",
            "category": "datastructures"
        },
        {
            "question": "In the array [52, 37, 63, 14, 17, 8, 6, 25], if we take 25 as the pivot, what will the list be after the first pass?",
            "options": [
                "6, 8, 63, 14, 17, 25, 37, 52",
                "6, 8, 25, 14, 17, 63, 37, 52",
                "6, 8, 17, 14, 25, 63, 37, 52",
                "6, 25, 63, 14, 17, 8, 37, 52"
            ],
            "answer": "6, 8, 17, 14, 25, 63, 37, 52",
            "difficulty": "hard",
            "category": "sorting"
        },
        {
            "question": "What is the time complexity of the Quick sort Algorithm if it is applied on this array [60, 56, 43, 12, 5]?",
            "options": [
                "O(n log n)",
                "O(n)",
                "O(log n)",
                "O(n²)"
            ],
            "answer": "O(n²)",
            "difficulty": "medium",
            "category": "sorting"
        },
        {
            "question": "What are the children nodes for i=2 in this array [3, 5, 10, 20, 11, 13, 12, 31]?",
            "options": [
                "10, 20",
                "20, 11",
                "13, 12",
                "12, 31"
            ],
            "answer": "10, 20",
            "difficulty": "medium",
            "category": "datastructures"
        },
        {
            "question": "How will the array elements look like after the second pass? Array: 36, 10, 66, 53, 34, 23",
            "options": [
                "10, 36, 66, 53, 34, 23",
                "10, 36, 53, 66, 34, 23",
                "10, 34, 36, 53, 66, 23",
                "10, 23, 34, 36, 53, 66"
            ],
            "answer": "10, 23, 34, 36, 53, 66",
            "difficulty": "hard",
            "category": "sorting"
        },
        {
            "question": "Which of the following sorting algorithms is best suited if the elements are already sorted?",
            "options": [
                "Insertion sort",
                "Heap sort",
                "Merge sort",
                "Quick sort"
            ],
            "answer": "Insertion sort",
            "difficulty": "medium",
            "category": "sorting"
        },
        {
            "question": "Merge sort uses ______ in order to sort a given array. This is because it divides the array into two halves and applies merge sort algorithm to each half individually after which the two sorted halves are merged together.",
            "options": [
                "Divide",
                "Divide and Conquer",
                "Conquer",
                "No correct answer"
            ],
            "answer": "Divide and Conquer",
            "difficulty": "easy",
            "category": "sorting"
        },
        {
            "question": "What is the running time of an insertion sort algorithm for the sequence [40, 70, 80, 90, 99]?",
            "options": [
                "Best case",
                "Average case",
                "Worst case",
                "No correct answer"
            ],
            "answer": "Best case",
            "difficulty": "medium",
            "category": "sorting"
        },
        {
            "question": "What is the running time of an insertion sort algorithm for the sequence [99, 90, 80, 70, 40]?",
            "options": [
                "Best case",
                "Average case",
                "Worst case",
                "No correct answer"
            ],
            "answer": "Worst case",
            "difficulty": "medium",
            "category": "sorting"
        }
    ],
    "trueFalseQuestions": [
        {
            "question": "A search is optimal if its heuristic function h(n) is admissible (never overestimates the cost to the goal)",
            "options": ["True", "False"],
            "answer": "True",
            "difficulty": "hard",
            "category": "searching"
        },
        {
            "question": "In Huffman coding, a prefix code means the codeword for one symbol is never the prefix of another symbol's codeword",
            "options": ["True", "False"],
            "answer": "True",
            "difficulty": "medium",
            "category": "datastructures"
        },
        {
            "question": "Prim's algorithm for finding a Minimum Spanning Tree (MST) is an example of a Greedy Algorithm",
            "options": ["True", "False"],
            "answer": "True",
            "difficulty": "medium",
            "category": "datastructures"
        },
        {
            "question": "Kruskal's algorithm for MST adds edges to the MST if they don't form a cycle",
            "options": ["True", "False"],
            "answer": "True",
            "difficulty": "medium",
            "category": "datastructures"
        },
        {
            "question": "A connected undirected graph with n vertices has n-1 edges in its spanning tree",
            "options": ["True", "False"],
            "answer": "True",
            "difficulty": "medium",
            "category": "datastructures"
        },
        {
            "question": "Breadth-First Search (BFS) explores level by level, guaranteeing discovery of the shortest path first in unweighted graphs",
            "options": ["True", "False"],
            "answer": "True",
            "difficulty": "medium",
            "category": "searching"
        },
        {
            "question": "Depth-First Search (DFS) primarily uses a stack data structure (either implicitly through recursion or explicitly)",
            "options": ["True", "False"],
            "answer": "True",
            "difficulty": "medium",
            "category": "searching"
        },
        {
            "question": "In DFS, an edge connecting a vertex u to an ancestor v (excluding parent) in the DFS tree is called a back edge",
            "options": ["True", "False"],
            "answer": "True",
            "difficulty": "medium",
            "category": "searching"
        },
        {
            "question": "The evaluation function F(n)=g(n)+h(n) in A* search uses h(n) as a heuristic estimate of the cost from node n to the goal node",
            "options": ["True", "False"],
            "answer": "True",
            "difficulty": "hard",
            "category": "searching"
        },
        {
            "question": "A tree is defined as a connected undirected graph with no simple circuits",
            "options": ["True", "False"],
            "answer": "True",
            "difficulty": "medium",
            "category": "datastructures"
        },
        {
            "question": "Huffman Coding is used for data compression by creating optimal prefix codes",
            "options": ["True", "False"],
            "answer": "True",
            "difficulty": "medium",
            "category": "datastructures"
        },
        {
            "question": "Both Prim's algorithm and Kruskal's algorithm are used to find the Minimal Spanning Tree (MST) of a weighted graph",
            "options": ["True", "False"],
            "answer": "True",
            "difficulty": "medium",
            "category": "datastructures"
        },
        {
            "question": "In A* search, if h(n) is always 0, the algorithm behaves like Dijkstra's Algorithm",
            "options": ["True", "False"],
            "answer": "True",
            "difficulty": "hard",
            "category": "searching"
        },
        {
            "question": "In Kruskal's MST algorithm, if adding the next cheapest edge creates a cycle, that edge is discarded",
            "options": ["True", "False"],
            "answer": "True",
            "difficulty": "medium",
            "category": "datastructures"
        },
        {
            "question": "A complete binary tree has all levels full except possibly the last level, which is filled from left to right",
            "options": ["True", "False"],
            "answer": "True",
            "difficulty": "medium",
            "category": "datastructures"
        },
        {
            "question": "Quicksort is a divide-and-conquer algorithm in which the pivot element is chosen, and this pivot element reduces the given problem into two smaller sets",
            "options": ["True", "False"],
            "answer": "True",
            "difficulty": "easy",
            "category": "sorting"
        },
        {
            "question": "The best case input for an insertion sort algorithm runs in linear time and is given by O(N^N)",
            "options": ["True", "False"],
            "answer": "False",
            "difficulty": "medium",
            "category": "sorting"
        },
        {
            "question": "The largest element in a min-heap is stored at the root",
            "options": ["True", "False"],
            "answer": "False",
            "difficulty": "easy",
            "category": "datastructures"
        },
        {
            "question": "The smallest element in a max-heap is at the root",
            "options": ["True", "False"],
            "answer": "False",
            "difficulty": "easy",
            "category": "datastructures"
        },
        {
            "question": "The (binary) heap data structure is an array object that we can view as a nearly complete binary tree",
            "options": ["True", "False"],
            "answer": "True",
            "difficulty": "medium",
            "category": "datastructures"
        },
        {
            "question": "Quicksort partitions an array and then calls itself recursively twice to sort the two resulting subarrays",
            "options": ["True", "False"],
            "answer": "True",
            "difficulty": "medium",
            "category": "sorting"
        },
        {
            "question": "Quick sort is a highly efficient sorting algorithm and is based on partitioning an array of data into smaller arrays",
            "options": ["True", "False"],
            "answer": "True",
            "difficulty": "easy",
            "category": "sorting"
        },
        {
            "question": "The following is considered a min-heap: 5, 10, 20",
            "options": ["True", "False"],
            "answer": "True",
            "difficulty": "easy",
            "category": "datastructures"
        }
    ]
};

// Make questionsData available globally
if (typeof window !== 'undefined') {
    window.questionsData = questionsData;
} else {
    module.exports = questionsData;
} 
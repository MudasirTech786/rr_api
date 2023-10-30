<?php

namespace App\Http\Controllers\API;

use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Products = Product::get();

        $response = [
            'success' => true,
            'Products' => $Products
        ];
        return response()->json($response, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'brand' => 'required',
            'price' => 'required',
            'quantity' => 'required',
            'description' => 'required',
        ]);
        if ($validator->fails()) {
            $response = [
                'success' => false,
                'message' => $validator->errors()
            ];
            return response()->json($response, 400);
        }

        $Product = new Product();

        $Product->brand = $request->brand;
        $Product->price = $request->price;
        $Product->quantity = $request->quantity;
        $Product->description = $request->description;

        $Product->save();

        $response = [
            'success' => true,
            'data' => $Product,
            'message' => 'Product has been added Successfully'
        ];

        return response()->json($response, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::find($id);

        if (!$product) {
            // Handle the case where the product is not found
            return response()->json(['message' => 'Product not found'], 404);
        }

        // Return the product as JSON
        return response()->json(['product' => $product]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Find the product by its ID
        $product = Product::find($id);

        if (!$product) {
            // Handle the case where the product is not found
            return response()->json(['message' => 'Product not found'], 404);
        }

        // Validate the request data
        // $request->validate([
        //     'brand' => 'required',
        //     'price' => 'required',
        //     'quantity' => 'required',
        //     'description' => 'required',
        // ]);

        // Update the product with the request data
        $product->update([
            'brand' => $request->input('brand'),
            'price' => $request->input('price'),
            'img' => $request->input('img'),
            'product_code' => $request->input('product_code'),
            'reward_point' => $request->input('reward_point'),
            'availability' => $request->input('availability'),
            'quantity' => $request->input('quantity'),
            'description' => $request->input('description'),
            'specification' => $request->input('quantity'),
        ]);

        // Return the updated product as JSON
        return response()->json(['message' => 'Product updated', 'product' => $product]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $project = Product::findOrFail($id);
        $project->delete();
        $response = [
            'success' => true,
            'message' => 'Project has been deleted Successfully'
        ];
        return response()->json($response, 200);
    }
}

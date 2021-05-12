import React from 'react'

const HelpCreateProduct = () => {
    return (
        
        <div className="overall">
            <ul className="helpStyle">
                How To Create a New Product:
                <li>
                1.	Click “Create Product”
                <li></li>
                2.	Enter the name of the product
                <li></li>
                3.	Enter the price per product
                <li></li>
                4.	Enter a label for the products image
                <li></li>
                5.	Upload image of product under “Image File”
                <li></li>
                6.	Enter the category of the product
                <li></li>
                7.	Enter product Brand
                <li></li>
                8.	Enter products Count in Stock
                <li></li>
                9.	Enter product Description 
                <li></li>
                10.	Click “Create Product”

                </li>
            </ul>
            <div className="marginBottom"></div>
           <ul className="helpStyle">
                How To Edit an Existing Product:
                <li>
                1.	Locate the product from the list.
                <li></li>
                2.	Under “Actions” select “Edit”
                <li></li>
                3.	Selecting “Edit” will open the page to edit the existing product
                <li></li>
                4.	Edit the product's Name, Price, Label, Image, Category, Brand, Count in Stock, and/or Description
                <li></li>
                5.	Once edits are completed, select “Edit Product” at the bottom of the screen

                </li>

                </ul>
            <li></li>

            How To Delete an Existing Product:
            <li></li>
            1.	Located the product from the list.
            <li></li>
            2.	Under “Actions” select “Delete”
            <li></li>
            3.	Confirmation window will pop-up

        </div>
        
    );
    }
export default HelpCreateProduct;
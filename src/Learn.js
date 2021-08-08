import React from "react";
import TriangleImage from "./assets/triangle.PNG";

import ScaleneImage from "./assets/scalene.PNG";
import IsoscelesImage from "./assets/isosceles.PNG";
import EquilateralImage from "./assets/equilateral.PNG";

import AcuteAngledImage from "./assets/acute-angled.PNG";
import ObtuseAngledImage from "./assets/obtuse-angled.PNG";
import RightAngledImage from "./assets/right-angled.PNG";

import AreaImage from "./assets/area.PNG";

export default function Learn() {
  return (
    <div className="Learn">
      <section className="FirstSection">
        <div className="ImageContainer">
          <img src={TriangleImage} alt="Trianlge PNG" />
        </div>
        <div className="TextContainer">
          In Geometry, a <strong>triangle</strong> is a three-sided polygon that
          consists of three edges and three vertices. The most important
          property of a triangle is that the{" "}
          <strong>
            sum of the internal angles of a triangle is equal to 180 degrees
          </strong>
          . This property is called 
          <a
            href="https://byjus.com/maths/intro-angle-sum-triangle/"
            target="_blank"
            rel="noreferrer"
          >
            angle sum property of triangle
          </a>
          .
          <br />
          <br />
          If ABC is a triangle, then it is denoted as ∆ABC, where A, B and C are
          the vertices of the triangle. A triangle is a two-dimensional shape,
          in 
          <a
            href="https://byjus.com/maths/euclidean-geometry/"
            target="_blank"
            rel="noreferrer"
          >
            Euclidean geometry
          </a>
          , which is seen as three non-collinear points in a unique plane.
        </div>
      </section>

      <section className="SecondSection">
        <h4>Properties</h4>
        <p>
          Each and every shape in Maths has some properties which distinguish
          them from each other. Let us discuss here some of the properties of
          triangles.
        </p>
        <ol>
          <li>A triangle has three sides and three angles.</li>
          <li>The sum of the angles of a triangle is always 180 degrees.</li>
          <li>
            The sum of the lengths of any two sides of a triangle is greater
            than the length of the third side. Similarly, the difference between
            the lengths of any two sides of a triangle is less than the length
            of the third side.
          </li>
        </ol>
      </section>

      <section className="ThirdSection">
        <h4>Types</h4>

        <p>
          On the basis of the length of the sides, triangles are classified into
          three categories:
        </p>
        <ol>
          <li>Scalene Triangle</li>
          <li>Isosceles Triangle</li>
          <li>Equilateral Triangle</li>
        </ol>

        <p>
          On the basis of measurement of the angles, triangles are classified
          into three categories:
        </p>
        <ol>
          <li>Acute Angle Triangle</li>
          <li>Right Angle Triangle</li>
          <li>Obtuse Angle Triangle</li>
        </ol>
      </section>

      <section className="FlexWrapTriangleTypeSection">
        <h4>Scalene Triangle</h4>

        <div className="TextNImgContainer">
          <div className="TextContainer">
            A scalene triangle is a type of triangle, in which all three sides
            have different side measures. Due to this, the three angles are also
            different from each other.
          </div>

          <div className="ImageContainer">
            <img src={ScaleneImage} alt="Scalene Triangle PNG" />
          </div>
        </div>
      </section>

      <section className="FlexWrapReverseTriangleTypeSection">
        <h4>Isosceles Triangle</h4>

        <div className="TextNImgContainer">
          <div className="ImageContainer">
            <img src={IsoscelesImage} alt="Isosceles Triangle PNG" />
          </div>

          <div className="TextContainer">
            In an isosceles triangle, two sides have equal length. The two
            angles opposite to the two equal sides are also equal to each other.
          </div>
        </div>
      </section>

      <section className="FlexWrapTriangleTypeSection">
        <h4>Equilateral Triangle</h4>

        <div className="TextNImgContainer">
          <div className="TextContainer">
            An equilateral triangle has all three sides equal to each other. Due
            to this all the internal angles are of equal degrees, i.e. each of
            the angles is 60°
          </div>

          <div className="ImageContainer">
            <img src={EquilateralImage} alt="Equilateral Triangle PNG" />
          </div>
        </div>
      </section>

      <section className="FlexWrapReverseTriangleTypeSection">
        <h4>Acute Angled Triangle</h4>

        <div className="TextNImgContainer">
          <div className="ImageContainer">
            <img src={AcuteAngledImage} alt="Acute Angled Triangle PNG" />
          </div>

          <div className="TextContainer">
            An acute triangle has all of its angles less than 90°.
          </div>
        </div>
      </section>

      <section className="FlexWrapTriangleTypeSection">
        <h4>Right Angled Triangle</h4>

        <div className="TextNImgContainer">
          <div className="TextContainer">
            In a right triangle, one of the angles is equal to 90° or right
            angle.
          </div>

          <div className="ImageContainer">
            <img src={RightAngledImage} alt="Right Angled Triangle PNG" />
          </div>
        </div>
      </section>

      <section className="FlexWrapReverseTriangleTypeSection">
        <h4>Obtuse Angled Triangle</h4>

        <div className="TextNImgContainer">
          <div className="ImageContainer">
            <img src={ObtuseAngledImage} alt="Obtuse Angled Triangle PNG" />
          </div>

          <div className="TextContainer">
            An obtuse triangle has any of its one angles more than 90°.
          </div>
        </div>
      </section>

      <section className="FourthSection">
        <h4>Perimeter of Triangle</h4>
        <p>
          A perimeter of a triangle is defined as the total length of the outer
          boundary of the triangle. Or we can say, the perimeter of the triangle
          is equal to the sum of all its three sides. The unit of the perimeter
          is the same as the unit of sides of the triangle.
          <br />
          <br />
          If ABC is a triangle, where AB, BC, and AC are the lengths of its
          sides, then the perimeter of ABC is given by:
          <br />
          <span>Perimeter = AB+BC+AC</span>
        </p>
      </section>

      <section className="FifthSection">
        <h4>Area of a Triangle</h4>
        <p>
          The 
          <a
            href="https://byjus.com/maths/area-of-a-triangle/"
            target="_href"
            rel="noreferrer"
          >
            area of a triangle
          </a>
           is the region occupied by the triangle in 2d space. The area for
          different triangles varies from each other depending on their
          dimensions. We can calculate the area if we know the base length and
          the height of a triangle. It is measured in square units.
        </p>

        <div className="TextNImgContainer">
          <div className="TextContainer">
            Suppose a triangle with base ‘B’ and height ‘H’ is given to
            us, then, the area of a triangle is given by-
            <br />
            Formula:
            <br /> <br />
            Area of triangle =  Half of Product of Base and Height
            <br />
            <span>Area = 1/2 × Base × Height</span>{" "}
          </div>

          <div className="ImageContainer">
            <img src={AreaImage} alt="Area Triangle PNG" />
          </div>
        </div>

        <h4>And</h4>
        <p>
          In case, if the height of a triangle is not given, we cannot be able
          to use the above formula to find the area of a triangle.
          <br />
          <br />
          Therefore, Heron’s formula is used to calculate the area of a
          triangle, if all the sides lengths are known.
          <br />
          <br />
          First, we need to calculate the semi perimeter (s).
          <br />
          s = (a+b+c)/2,                     (where a,b,c are the three sides of
          a triangle)
          <br />
          <br />
          <span>Now Area is given by; A = √[s(s-a)(s-b)(s-c)]</span>{" "}
        </p>
      </section>

      <div className="ThanksDiv">
        Thanks to{" "}
        <a
          href="https://byjus.com/maths/triangles/"
          target="_blank"
          rel="noreferrer"
        >
          BYJU'S
        </a>{" "}
        <span role="img" aria-label="folded hands emoji">
          🙏
        </span>
        , for the above information.
      </div>
    </div>
  );
}

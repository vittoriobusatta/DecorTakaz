import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";

const STEPS = {
  COORDONNES: 0,
  DETAILS: 1,
  BUDGET: 2,
  RECAP: 3,
};

const MATERIALS = [
  {
    label: "Bois de tamarin",
    value: "tamarin",
  },
  {
    label: "Résine époxy",
    value: "resine",
  },
  {
    label: "Bois massif",
    value: "massif",
  },
  {
    label: "Bois de rose",
    value: "rose",
  },
];

const Input = ({
  id,
  label,
  type,
  required,
  disabled,
  formatPrice,
  register,
  strenghtLabel,
  className,
}) => {
  const [pattern, setPattern] = useState(/./);
  useEffect(() => {
    switch (type) {
      case "email":
        if (strenghtLabel) {
          setPattern(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/);
          break;
        }
      case "password":
        if (strenghtLabel) {
          setPattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^ws]).{8,}$/);
          break;
        }
      default:
        setPattern(/./);
        break;
    }
  }, [type, strenghtLabel]);

  return (
    <>
      {formatPrice && <span className="form__group__currency">€</span>}
      <input
        id={id}
        disabled={disabled}
        className={
          className ? `form__group__input ${className}` : "form__group__input"
        }
        {...register(id, {
          required,
          pattern: {
            value: pattern,
            message: `Inserer un ${
              type === "email" ? "email" : "mot de passe"
            }.`,
          },
        })}
        placeholder={label}
        type={type}
      />
    </>
  );
};

export default function Home({ isOpened, setIsOpened }) {
  const [step, setStep] = useState(STEPS.COORDONNES);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, setValue, watch, reset } = useForm({
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      phone: "",
      city: "",
      type: "",
      height: "",
      width: "",
      length: "",
      material: [],
    },
  });

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.RECAP) {
      return "Create";
    }

    return "Suivant";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.COORDONNES) {
      return undefined;
    }

    return "Retour";
  }, [step]);

  let bodyContent;
  let headerContent;

  const type = watch("type");
  const material = watch("material");

  switch (step) {
    case STEPS.DETAILS:
      headerContent = (
        <div className="form__content">
          <h1>Détails du projet</h1>
        </div>
      );
      bodyContent = (
        <div className="form__content">
          <Input
            id="project"
            label="Type de projet"
            type="text"
            required
            register={register}
            className="coordonees__input"
          />
          <div className="form__wrap">
            <h4>Dimensions requises :</h4>
            <div className="form__dims">
              <Input
                id="height"
                label="Hauteur"
                type="number"
                required
                register={register}
                className="form__dims__button"
              />
              <Input
                id="width"
                label="Largeur"
                type="number"
                required
                register={register}
                className="form__dims__button"
              />
              <Input
                label="Longueur"
                id="length"
                type="number"
                required
                register={register}
                className="form__dims__button"
              />
            </div>
          </div>
          <div className="form__wrap">
            <h4>Matériaux souhaités :</h4>
            <div className="form__materials">
              {MATERIALS.map((mats, index) => (
                <button
                  key={index}
                  className={
                    material.includes(mats.value)
                      ? "form__type__group__button form__type__group__button--selected"
                      : "form__type__group__button"
                  }
                  onClick={() => {
                    if (material.includes(mats.value)) {
                      setValue(
                        "material",
                        material.filter((mat) => mat !== mats.value)
                      );
                    } else {
                      setValue("material", [...material, mats.value]);
                    }
                  }}
                >
                  {mats.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      );
      break;
    case STEPS.BUDGET:
      headerContent = (
        <div className="form__content">
          <h1>Budget</h1>
        </div>
      );
      bodyContent = (
        <div className="form__content">
          <h1>
            <span className="form__step">3</span> Votre budget
          </h1>
        </div>
      );
      break;
    case STEPS.RECAP:
      bodyContent = (
        <div className="form__content">
          <h1>
            <span className="form__step">4</span> Récapitulatif
          </h1>
        </div>
      );
      break;
    default:
      headerContent = (
        <div className="form__content">
          <h1>Coordonnées</h1>
        </div>
      );
      bodyContent = (
        <div className="form__content">
          <form className="form__form">
            <Input
              id="lastname"
              label="Prénom"
              type="text"
              required
              register={register}
              className="coordonees__input"
            />
            <Input
              id="name"
              label="Nom"
              type="text"
              required
              register={register}
              className="coordonees__input"
            />
            <Input
              id="email"
              label="Email"
              type="email"
              required
              register={register}
              strenghtLabel
              className="coordonees__input"
            />
            <Input
              id="phone"
              label="Téléphone"
              type="tel"
              required
              register={register}
              className="coordonees__input"
            />
            <Input
              id="city"
              label="Ville"
              type="text"
              required
              register={register}
              className="coordonees__input"
            />
          </form>
          <div className="form__wrap">
            <h4>Type de client :</h4>
            <div className="form__type__group">
              <button
                className={
                  type === "particulier"
                    ? "form__type__group__button form__type__group__button--selected"
                    : "form__type__group__button"
                }
                onClick={() => {
                  setValue("type", "particulier");
                }}
              >
                Particulier
              </button>
              <button
                className={
                  type === "professionnel"
                    ? "form__type__group__button form__type__group__button--selected"
                    : "form__type__group__button"
                }
                onClick={() => {
                  setValue("type", "professionnel");
                }}
              >
                Professionnel
              </button>
            </div>
          </div>
        </div>
      );
      break;
  }

  return (
    <>
      <div className="form">
        <div className="form__container">
          <div className="form__header">{headerContent}</div>
          <div className="form__body">{bodyContent}</div>
          <div className="form__footer">
            {step !== STEPS.COORDONNES && (
              <button
                className="form__footer__button form__footer__button--back"
                onClick={onBack}
              >
                {secondaryActionLabel}
              </button>
            )}
            <button
              className="form__footer__button form__footer__button--next"
              onClick={onNext}
            >
              {actionLabel}
            </button>
          </div>
        </div>
      </div>
      <div
        className="overlay"
        onClick={() => {
          setIsOpened(false);
        }}
      ></div>
    </>
  );
}
